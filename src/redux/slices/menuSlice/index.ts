import {createSlice} from "@reduxjs/toolkit";
import {MenuStateType} from "./types";
import findMenuFirstThunk from "../../thunks/menuThunks/findMenuFirstThunk";
import {TopLevelCategoryTypes} from "../../../interfaces/page.interface";
import {HYDRATE} from "next-redux-wrapper";
import {HydrateAction} from "../../index";

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
    setCategory: (state, action) => {
      state.firstCategory = action.payload;
    },
    setStaticMenu: (state, action) => {
      state.menu = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(findMenuFirstThunk.fulfilled, (state, action) => {

      if (action.payload.status === 200) {
        state.menu = action.payload.menu;
      }
    });
    builder.addCase(
      HYDRATE,
      (state, action: HydrateAction<MenuStateType>) => {
        return action.payload.menu;
      },
    );
  },
});

export const {setCategory, setStaticMenu} = menuSlice.actions;
export default menuSlice.reducer;
