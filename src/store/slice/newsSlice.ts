import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import fetchRSS from "../../services/rssService.ts";
import type {NewsItem} from "../../services/rssService.ts";

interface NewsState {
    news: NewsItem[];
    vipNews: NewsItem[];
    state: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: NewsState = {
    news: [],
    vipNews: [],
    state: 'idle',
}

export const fetchNews = createAsyncThunk("news/fetchNews",
    async () => {
        const [news, vipNews] = await Promise.all([
            fetchRSS(),
            fetchRSS("danh-cho-ban-doc-vip"),
        ]);
        return {news, vipNews};
    })

const newsSlice = createSlice({
        name: "news",
        initialState,
        reducers : {},
        extraReducers: builder => {
            builder
                .addCase(fetchNews.pending, state => {
                    state.state = 'loading';
                })
                .addCase(fetchNews.fulfilled, (state, action) => {
                    state.state = 'succeeded';
                    state.news = action.payload.news;
                    state.vipNews = action.payload.vipNews;
                })
                .addCase(fetchNews.rejected, state => {
                    state.state = 'failed';
                });
        },
    }
)

export default newsSlice.reducer;
