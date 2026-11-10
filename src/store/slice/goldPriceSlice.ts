import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSJCBidAsk, {type GoldPrice} from "../../services/sjcService.ts";

interface GoldPriceState {
    data: GoldPrice | null;
    code: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: GoldPriceState = {
    data: null,
    code: null,
    status: 'idle',
    error: null,
};

export const fetchGoldPrice = createAsyncThunk(
    "goldPrice/fetchGoldPrice",
    (code: string) => getSJCBidAsk(code),
    {
        condition: (_, { getState }) => {
            const state = (getState() as { goldPrice : GoldPriceState
            }).goldPrice;

            return state.status !== 'loading';
        }
    }
);

const goldPriceSlice = createSlice({
    name: "goldPriceSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchGoldPrice.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })

            .addCase(fetchGoldPrice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.code = action.meta.arg;
                state.error = null;
            })

            .addCase(fetchGoldPrice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? "Unknown Error";
            });
    }
});

export default goldPriceSlice.reducer;
