
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchNewsDetails} from "../../services/fetchNewsDetails.ts";
import type {NewsStructure} from "../../config/newsStructure.ts";
import type {RootState} from "../store.ts";

interface NewsDetailState {
    feeds: Record<string, NewsStructure>;
    state: Record<string, 'loading' | 'succeeded' | 'failed'>;
}

const initialState: NewsDetailState = {
    feeds: {},
    state: {}
};

export const fetchNewsDetail = createAsyncThunk(
    "newsDetail/fetchNewsDetail",
    async (proxyURL: string) => {
        return await fetchNewsDetails(proxyURL);
    },
    {
        condition: (proxyURL, {getState}) => {
            const state = (getState() as RootState).newsDetail;
            return !state.feeds[proxyURL] && state.state[proxyURL] !== 'loading';
        }
    }
);

const newsDetailSlice = createSlice({
    name: "newsDetail",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNewsDetail.pending, (state, action) => {
                state.state[action.meta.arg] = 'loading';
            })
            .addCase(fetchNewsDetail.fulfilled, (state, action) => {
                state.feeds[action.meta.arg] = action.payload;
                state.state[action.meta.arg] = 'succeeded';
            })
            .addCase(fetchNewsDetail.rejected, (state, action) => {
                state.state[action.meta.arg] = 'failed';
            });
    }
});

export default newsDetailSlice.reducer;
