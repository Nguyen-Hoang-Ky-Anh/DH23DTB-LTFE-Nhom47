import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "./slice/newsSlice";
import exchangeRateReducer from "./slice/currencyRateSlice";

export const store = configureStore({
    reducer : {
        news: newsReducer,
        exchangeRate: exchangeRateReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

