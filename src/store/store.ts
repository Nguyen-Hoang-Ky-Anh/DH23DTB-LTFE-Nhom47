import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "./slice/newsSlice";
import exchangeRateReducer from "./slice/currencyRateSlice";
import goldPriceReducer from "./slice/goldPriceSlice";
import vietLottReducer from "./slice/vietLottSlice";

export const store = configureStore({
    reducer : {
        news: newsReducer,
        exchangeRate: exchangeRateReducer,
        goldPrice: goldPriceReducer,
        vietLott: vietLottReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

