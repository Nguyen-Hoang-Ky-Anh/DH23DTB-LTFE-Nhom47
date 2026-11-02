import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {NewsItem} from "../../services/rssService.ts";
import fetchRSS from "../../services/rssService.ts";
import {RSS_FEEDS} from "../../services/rssConfig.ts";

const feedPaths = {
    home: RSS_FEEDS.home,
    vip: RSS_FEEDS.vip,
    ...RSS_FEEDS.categories,
};

type FeedName = keyof typeof feedPaths;

interface NewsState {
    feeds: Partial<Record<FeedName, NewsItem[]>>;
    states: Partial<Record<FeedName, 'loading' | 'succeeded' | 'failed'>>;
}

const initialState: NewsState = {
    feeds: {},
    states: {},
}

export const fetchNews = createAsyncThunk("news/fetchNews",
    (feed: FeedName) => fetchRSS(feedPaths[feed]),
    {
        condition: (feed, {getState}) =>
            (getState() as {news: NewsState}).news.states[feed] !== 'loading',
    })

const newsSlice = createSlice({
        name: "news",
        initialState,
        reducers : {},
        extraReducers: builder => {
            builder
                .addCase(fetchNews.pending, (state, action) => {
                    state.states[action.meta.arg] = 'loading';
                })
                .addCase(fetchNews.fulfilled, (state, action) => {
                    state.feeds[action.meta.arg] = action.payload;
                    state.states[action.meta.arg] = 'succeeded';
                })
                .addCase(fetchNews.rejected, (state, action) => {
                    state.states[action.meta.arg] = 'failed';
                });
        },
    }
)

export default newsSlice.reducer;
