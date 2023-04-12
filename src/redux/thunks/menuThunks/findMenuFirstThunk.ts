import {createAsyncThunk} from "@reduxjs/toolkit";

import {MenuItemTypes} from "../../../interfaces/menu.interface";
import axios from "axios";
import {apiPoints} from "../../../constants/apiPoints";
import {TopLevelCategoryTypes} from "../../../interfaces/page.interface";

const findMenuFirstThunk = createAsyncThunk(
  'menu/findMenuFirstThunk',
  async (_, {getState}) => {
    const state = getState();
    console.log('stateeeee====>>', state);
    const {
      data: menu,
      status,
      statusText
    } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + apiPoints.findTopPage.path, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      firstCategory: state ? state.menu.firstCategory : TopLevelCategoryTypes.Courses
    });

    return {menu, status, statusText};
  }
);

export default findMenuFirstThunk;
