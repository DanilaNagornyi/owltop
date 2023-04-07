
import { createSlice } from "@reduxjs/toolkit";
import {MenuStateType} from "./types";
import findMenuFirstThunk from "../../thunks/menuThunks/findMenuFirstThunk";
import {TopLevelCategoryTypes} from "../../../interfaces/page.interface";

const initialState = {
    isFetched: false,
    isFetching: false,
    menu: [],
    firstCategory: TopLevelCategoryTypes.Courses,
} as MenuStateType;

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menu = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(findMenuFirstThunk.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.menu = action.payload.menu;
            }
        });
    },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
