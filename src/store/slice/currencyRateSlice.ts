
import getVNDBidAsk, {
    type ExchangeRate
} from "../../services/currencyRateService.ts";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ExchangeRateState {
    data: ExchangeRate | null;
    code: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ExchangeRateState = {
    data: null,
    code: null,
    status: 'idle',
    error: null,
};

export const fetchExchangeRate = createAsyncThunk(
    "exchangeRate/fetchExchangeRate",
    (code: string) => getVNDBidAsk(code),
    {
        condition: (_, { getState }) => {
            const state = (getState() as { exchangeRate: ExchangeRateState
            }).exchangeRate;

            return state.status !== 'loading';
        }
    }
);

const exchangeRateSlice = createSlice({
    name: "exchangeRate",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchExchangeRate.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })

            .addCase(fetchExchangeRate.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.code = action.meta.arg;
                state.error = null;
            })

            .addCase(fetchExchangeRate.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? "Unknown Error";
            });
    }
});

export default exchangeRateSlice.reducer;
