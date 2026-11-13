import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    type soccerCompetitions,
    getStandingsCompetitions,
    type standing
} from "../../services/soccerCompetitionService.ts";
import type { RootState } from "../store.ts";

interface SoccerStandingsState {
    feeds: Partial<Record<soccerCompetitions, standing[] | null>>,
    states: Partial<Record<soccerCompetitions, 'loading' | 'succeeded' | 'error'>>
}

const initialState: SoccerStandingsState = {
    feeds: {},
    states: {}
};

export const fetchSoccerStandingCompetitions = createAsyncThunk(
    "soccerMatches/fetchSoccerMatches",
    (type: soccerCompetitions) =>
        getStandingsCompetitions(type),
    {
        condition: (type, { getState }) => {
            const state = getState() as RootState;

            return state.soccerStanding.states[type] === undefined ||
                state.soccerMatches.states[type] === "error";
        }
    }
);

const soccerStandingCompetitionSlice = createSlice({
    name: "soccerStandingsSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSoccerStandingCompetitions.pending, (state, action) => {
                state.states[action.meta.arg] = 'loading';
            })

            .addCase(fetchSoccerStandingCompetitions.fulfilled, (state, action) => {
                state.states[action.meta.arg] = 'succeeded';
                state.feeds[action.meta.arg] = action.payload;
            })

            .addCase(fetchSoccerStandingCompetitions.rejected, (state, action) => {
                state.states[action.meta.arg] = 'error';
            });
    }
});

export default soccerStandingCompetitionSlice.reducer;
