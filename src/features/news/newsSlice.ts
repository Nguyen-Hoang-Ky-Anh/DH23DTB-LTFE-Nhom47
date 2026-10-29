import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import fetchRSS from "../../services/rssService.ts";


const initialState = {
    news: [],
    state: 'idle',
    error : null
}

export const fetchNews = createAsyncThunk("news/fetchNews",
    async () => {
        return await fetchRSS();
    })

const newsSlice = createSlice({
        name: "news",
        initialState,
        reducers : {},
    }
)

export default newsSlice.reducer;