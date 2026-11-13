import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    type soccerCompetitions,
    getMatchesCompetitionsFromDateToDate,
    type match
} from "../../services/soccerCompetitionService.ts";
import type { RootState } from "../store.ts";

interface SoccerMatchesState {
    feeds: Partial<Record<soccerCompetitions, match[] | null>>,
    states: Partial<Record<soccerCompetitions, 'loading' | 'succeeded' | 'error'>>
}

const initialState: SoccerMatchesState = {
    feeds: {},
    states: {}
};

export interface FetchSoccerMatchesArgs {
    type: soccerCompetitions;
    fromDate?: string;
    toDate?: string;
}

export const fetchSoccerMatchesCompetitionsFromDateToDate = createAsyncThunk(
    "soccerMatches/fetchSoccerMatches",
    ({ type, fromDate, toDate }: FetchSoccerMatchesArgs) =>
        getMatchesCompetitionsFromDateToDate(type, fromDate, toDate),
    {
        condition: ({ type }, { getState }) => {
            const state = getState() as RootState;

            return state.soccerMatches.states[type] === undefined ||
                state.soccerMatches.states[type] === "error";
        }
    }
);

const soccerMatchesCompetitionsSlice = createSlice({
    name: "soccerMatchSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSoccerMatchesCompetitionsFromDateToDate.pending, (state, action) => {
                state.states[action.meta.arg.type] = 'loading';
            })

            .addCase(fetchSoccerMatchesCompetitionsFromDateToDate.fulfilled, (state, action) => {
                state.states[action.meta.arg.type] = 'succeeded';
                state.feeds[action.meta.arg.type] = action.payload;
            })

            .addCase(fetchSoccerMatchesCompetitionsFromDateToDate.rejected, (state, action) => {
                state.states[action.meta.arg.type] = 'error';
            });
    }
});

export default soccerMatchesCompetitionsSlice.reducer;
