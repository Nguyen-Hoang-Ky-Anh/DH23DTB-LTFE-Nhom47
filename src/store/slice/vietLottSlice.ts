import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVietLott, {type VietLott, type VietLottType} from "../../services/lotteryService.ts";
import type { RootState } from "../store.ts";

interface VietLottState {
    feeds: Partial<Record<VietLottType, VietLott | null>>,
    states: Partial<Record<VietLottType, 'loading' | 'succeeded' | 'error'>>
}

const initialState: VietLottState = {
    feeds: {},
    states: {}
};

export const fetchVietLott = createAsyncThunk(
    "vietLott/fetchVietLott",
    (type: VietLottType) => getVietLott(type),
    {
        condition: (type, { getState }) => {
            const state = getState() as RootState;
            return state.vietLott.states[type] === undefined ||
                state.vietLott.states[type] === "error";
        }
    }
);

const vietLottSlice = createSlice({
    name: "vietLottSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchVietLott.pending, (state, action) => {
                state.states[action.meta.arg] = 'loading';
            })

            .addCase(fetchVietLott.fulfilled, (state, action) => {
                state.states[action.meta.arg] = 'succeeded';
                state.feeds[action.meta.arg] = action.payload;
            })

            .addCase(fetchVietLott.rejected, (state, action) => {
                state.states[action.meta.arg] = 'error';
            });
    }
});

export default vietLottSlice.reducer;
