import {SortEnum} from "../../../components/Sort/types";
import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {HydrateAction} from "../../index";
import {SortStateType} from "./types";

const initialState = {
  isFetched: false,
  isFetching: false,
  sort: SortEnum.Rating,
  products: [],
} as SortStateType;

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action) => {
      switch (action.payload) {
        case SortEnum.Rating:
          state.products = state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1);
          state.sort = action.payload;
          break;
        case SortEnum.Price:
          state.products = state.products.sort((a, b) => a.price > b.price ? 1 : -1);
          state.sort = action.payload;
          break;
      }
    },
    setProductsSort: (state, action) => {
      state.products = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(
      HYDRATE,
      (state, action: HydrateAction<SortStateType>) => {
        return action.payload.sort;
      },
    );
  }
});

export const {setSort, setProductsSort} = sortSlice.actions;
export default sortSlice.reducer;
