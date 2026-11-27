import {createSlice} from "@reduxjs/toolkit";

export const THEME_STORAGE_KEY = "theme";

const themeSlice = createSlice({
    name: "theme",
    initialState: () => {
    return {isDark: localStorage.getItem(THEME_STORAGE_KEY) === "dark"};
    },
    reducers: {
        toggleTheme(state) {
            state.isDark = !state.isDark;
        },
    },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;