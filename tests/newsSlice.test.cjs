const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const {resolve} = require('node:path');
const {runInNewContext} = require('node:vm');
const ts = require('typescript');
const toolkit = require('@reduxjs/toolkit');

function loadModule(file, imports = {}) {
    const source = readFileSync(resolve(__dirname, '..', file), 'utf8');
    const code = ts.transpileModule(source, {
        compilerOptions: {module: ts.ModuleKind.CommonJS, esModuleInterop: false},
    }).outputText;
    const exported = {};
    runInNewContext(code, {exports: exported, require: name => imports[name]});
    return exported;
}

test('RSS feeds load independently, skip duplicate requests, and retry failed feeds', async () => {
    const {RSS_FEEDS} = loadModule('src/services/rssConfig.ts');
    const calls = [];
    const pending = new Map();
    const {default: reducer, fetchNews} = loadModule('src/store/slice/newsSlice.ts', {
        '@reduxjs/toolkit': toolkit,
        '../../services/rssConfig.ts': {RSS_FEEDS},
        '../../services/rssService.ts': {default: feed => {
            calls.push(feed);
            return new Promise((resolve, reject) => pending.set(feed, {resolve, reject}));
        }},
    });
    const store = toolkit.configureStore({reducer: {news: reducer}});
    const home = store.dispatch(fetchNews('home'));
    const vip = store.dispatch(fetchNews('vip'));
    const duplicateHome = store.dispatch(fetchNews('home'));
    const duplicateVip = store.dispatch(fetchNews('vip'));
    assert.deepEqual(calls, [RSS_FEEDS.home, RSS_FEEDS.vip]);

    pending.get(RSS_FEEDS.home).resolve([{title: 'Home article'}]);
    pending.get(RSS_FEEDS.vip).reject(new Error('VIP unavailable'));
    await Promise.all([home, vip, duplicateHome, duplicateVip]);
    assert.equal(store.getState().news.feeds.home[0].title, 'Home article');
    assert.equal(store.getState().news.states.home, 'succeeded');
    assert.equal(store.getState().news.states.vip, 'failed');
    assert.equal(store.getState().news.feeds.vip, undefined);

    const retry = store.dispatch(fetchNews('vip'));
    pending.get(RSS_FEEDS.vip).resolve([{title: 'VIP article'}]);
    await retry;
    assert.deepEqual(calls, [RSS_FEEDS.home, RSS_FEEDS.vip, RSS_FEEDS.vip]);
    assert.equal(store.getState().news.feeds.vip[0].title, 'VIP article');
    assert.equal(store.getState().news.states.vip, 'succeeded');

    const category = store.dispatch(fetchNews('thoiSu'));
    pending.get(RSS_FEEDS.categories.thoiSu).reject(new Error('Category unavailable'));
    await category;
    assert.equal(store.getState().news.states.thoiSu, 'failed');
    assert.equal(store.getState().news.feeds.home[0].title, 'Home article');
    assert.equal(store.getState().news.feeds.vip[0].title, 'VIP article');

    const categoryRetry = store.dispatch(fetchNews('thoiSu'));
    pending.get(RSS_FEEDS.categories.thoiSu).resolve([{title: 'Category article'}]);
    await categoryRetry;
    assert.equal(store.getState().news.feeds.thoiSu[0].title, 'Category article');
    assert.equal(store.getState().news.feeds['thoi-su'], undefined);
});
