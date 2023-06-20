import {Action, configureStore} from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {createWrapper} from "next-redux-wrapper";
import sortReducer from "./slices/sortSlice";

const makeStore = () => {
  return configureStore({
    reducer: {
      menu: menuReducer,
      sort: sortReducer,
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export interface HydrateAction<T> extends Action {
  payload: {
    [stateName: string]: T;
  };
}

export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false,
});
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

