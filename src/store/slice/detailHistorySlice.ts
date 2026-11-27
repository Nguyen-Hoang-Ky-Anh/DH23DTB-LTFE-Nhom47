import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {DetailHistory} from "../../services/parseNewDetailHistory.ts";
import type {RootState} from "../store.ts";
import fetchNewsDetailHistory from "../../services/fetchNewsDetailHistory.ts";

interface DetailHistoryState {
    feeds: Record<string, DetailHistory>;
    state: Record<string, 'loading' | 'succeeded' | 'failed'>;
}

const initialState: DetailHistoryState = {
    feeds: {},
    state: {}
};

export const fetchDetailHistory = createAsyncThunk(
    "detailHistory/fetchDetailHistory",
    async (threadId: string) => {
        return await fetchNewsDetailHistory(threadId);
    },
    {
        condition: (threadId, {getState}) => {
            const state = (getState() as RootState).detailHistory;
            return !state.feeds[threadId] && state.state[threadId] !== 'loading';
        }
    }
);

const detailHistorySlice = createSlice({
    name: "detailHistory",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDetailHistory.pending, (state, action) => {
                state.state[action.meta.arg] = 'loading';
            })
            .addCase(fetchDetailHistory.fulfilled, (state, action) => {
                state.feeds[action.meta.arg] = action.payload;
                state.state[action.meta.arg] = 'succeeded';
            })
            .addCase(fetchDetailHistory.rejected, (state, action) => {
                state.state[action.meta.arg] = 'failed';
            });
    }
});

export default detailHistorySlice.reducer;