import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchWorldCupGroups, fetchWorldCupMatches, type WorldCupGroup, type WorldCupMatch} from "../../services/worldCupService.ts";
import type {RootState} from "../store.ts";

type WorldCupType = "schedule" | "standings";

interface WorldCupState {
    feeds: {
        schedule: WorldCupMatch[];
        standings: WorldCupGroup[];
    };
    states: Partial<Record<WorldCupType, "loading" | "succeeded" | "error">>;
}

const initialState: WorldCupState = {
    feeds: {schedule: [], standings: []},
    states: {},
};

export const fetchWorldCup = createAsyncThunk(
    "worldCup/fetchWorldCup",
    async (type: WorldCupType) => {
        if (type === "schedule") {
            return {type, data: await fetchWorldCupMatches()};
        }
        return {type, data: await fetchWorldCupGroups()};
    },
    {
        condition: (type, {getState}) => {
            const status = (getState() as RootState).worldCup.states[type];
            return status === undefined || status === "error";
        },
    },
);

const worldCupSlice = createSlice({
    name: "worldCupSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWorldCup.pending, (state, action) => {
                state.states[action.meta.arg] = "loading";
            })
            .addCase(fetchWorldCup.fulfilled, (state, action) => {
                const result = action.payload;
                if (result.type === "schedule") {
                    state.feeds.schedule = result.data;
                } else {
                    state.feeds.standings = result.data;
                }
                state.states[result.type] = "succeeded";
            })
            .addCase(fetchWorldCup.rejected, (state, action) => {
                state.states[action.meta.arg] = "error";
            });
    },
});

export default worldCupSlice.reducer;
