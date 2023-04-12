import {Action, configureStore} from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {createWrapper} from "next-redux-wrapper";

const makeStore = () => {
  // const publicRuntimeConfig = getRuntimeConfig();
  // const { app }: PublicRuntimeConfig = publicRuntimeConfig;
  // const { isDev } = app.env;

  return configureStore({
    reducer: {
      menu: menuReducer,
    }

    // middleware: getDefaultMiddleware => {
    //   if (isDev) {
    //     return getDefaultMiddleware().concat(logger);
    //   } else {
    //     return getDefaultMiddleware();
    //   }
    // },
    // devTools: isDev,
  });
};

// const store = configureStore({
//     reducer: {
//         menu: menuReducer,
//     }
// });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export interface HydrateAction<T> extends Action {
  payload: {
    [stateName: string]: T;
  };
}

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false,
});
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

// export default store;
