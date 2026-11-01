import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import fetchRSS from "../../services/rssService.ts";
import type {NewsItem} from "../../services/rssService.ts";

interface NewsState {
    news: NewsItem[];
    vipNews: NewsItem[];
    state: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: NewsState = {
    news: [],
    vipNews: [],
    state: 'idle',
    error : null
}

export const fetchNews = createAsyncThunk("news/fetchNews",
    async () => {
        const [news, vipNews] = await Promise.all([
            fetchRSS(),
            fetchRSS("danh-cho-ban-doc-vip"),
        ]);
        return {news, vipNews};
    }, {
        condition: (_, {getState}) => (getState() as {news: NewsState}).news.state !== 'loading',
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
                    state.news = action.payload.news;
                    state.vipNews = action.payload.vipNews;
                })
                .addCase(fetchNews.rejected, (state, action) => {
                    state.state = 'failed';
                    state.error = action.error.message || 'Không tải được tin RSS.';
                });
        },
    }
)

export default newsSlice.reducer;
