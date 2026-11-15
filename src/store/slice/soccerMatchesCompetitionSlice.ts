import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    type soccerCompetitions,
    getMatchesCompetitionsFromDateToDate,
    type match, getNearestMatchesCompetition
} from "../../services/soccerCompetitionService.ts";
import type { RootState } from "../store.ts";

interface SoccerMatchesState {
    feeds: Partial<Record<soccerCompetitions, match[] | null>>,
    states: Partial<Record<soccerCompetitions, 'loading' | 'succeeded' | 'error'>>,

    nearestFeeds: Partial<Record<soccerCompetitions, match[] | null>>,
    nearestStates: Partial<Record<soccerCompetitions, 'loading' | 'succeeded' | 'error'>>,
}

const initialState: SoccerMatchesState = {
    feeds: {},
    states: {},
    nearestFeeds: {},
    nearestStates: {}
};

export interface FetchSoccerMatchesArgs {
    type: soccerCompetitions;
    dateFrom?: string;
    dateTo?: string;
}

export const fetchSoccerMatchesCompetitionsFromDateToDate = createAsyncThunk(
    "soccerMatches/fetchSoccerMatches",
    ({ type, dateFrom, dateTo }: FetchSoccerMatchesArgs) =>
        getMatchesCompetitionsFromDateToDate(type, dateFrom, dateTo),
    {
        condition: ({ type }, { getState }) => {
            const state = getState() as RootState;

            return state.soccerMatches.states[type] === undefined ||
                state.soccerMatches.states[type] === "error";
        }
    }
);

export const fetchNearestSoccerMatches = createAsyncThunk(
    "soccerMatches/fetchNearestSoccerMatches",
    (type: soccerCompetitions) =>
        getNearestMatchesCompetition(type),
    {
        condition: (type, { getState }) => {
            const state = getState() as RootState;

            return state.soccerMatches.nearestStates[type] === undefined ||
                state.soccerMatches.nearestStates[type] === "error";
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
            })

            //Nearest Matches
            .addCase(fetchNearestSoccerMatches.pending, (state, action) => {
                state.nearestStates[action.meta.arg] = 'loading';
            })

            .addCase(fetchNearestSoccerMatches.fulfilled, (state, action) => {
                state.nearestStates[action.meta.arg] = 'succeeded';
                state.nearestFeeds[action.meta.arg] = action.payload;
            })

            .addCase(fetchNearestSoccerMatches.rejected, (state, action) => {
                state.nearestStates[action.meta.arg] = 'error';
            });
    }
});

export default soccerMatchesCompetitionsSlice.reducer;
