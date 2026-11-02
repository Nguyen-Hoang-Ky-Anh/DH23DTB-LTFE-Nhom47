import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {NewsItem} from "../../services/rssService.ts";
import fetchRSS from "../../services/rssService.ts";
import {RSS_FEEDS} from "../../services/rssConfig.ts";

type Categories = keyof typeof RSS_FEEDS.categories;
type FeedName = typeof RSS_FEEDS.home | typeof RSS_FEEDS.vip | typeof RSS_FEEDS.categories[Categories]

interface NewsState {
    feeds: Partial<Record<FeedName, NewsItem[]>>;
    state: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: NewsState = {
    feeds: {},
    state: 'idle',
    error: null
}

export const fetchNews = createAsyncThunk("news/fetchNews",
    async () => {
        const feedEntries = Object.entries({
            home: RSS_FEEDS.home,
            vip: RSS_FEEDS.vip,
            ...RSS_FEEDS.categories
        });

        return await Promise.all(
            feedEntries.map(async ([key, feed]) => ({
                key: key as FeedName,
                news: await fetchRSS(feed)
            }))
        );
    })

const newsSlice = createSlice({
        name: "news",
        initialState,
        reducers : {},
        extraReducers: builder => {
            builder
                .addCase(fetchNews.pending, state => {
                    state.state = 'loading';
                    state.error = null;
                })
                .addCase(fetchNews.fulfilled, (state, action) => {
                    state.state = 'succeeded';
                    action.payload.forEach(({ key, news }) => {
                        state.feeds[key] = news;
                    });
                })
                .addCase(fetchNews.rejected, state => {
                    state.state = 'failed';
                });
        },
    }
)

export default newsSlice.reducer;