import {createAsyncThunk} from "@reduxjs/toolkit";

import {MenuItemTypes} from "../../../interfaces/menu.interface";
import axios from "axios";
import {apiPoints} from "../../../constants/apiPoints";

const findMenuFirstThunk = createAsyncThunk(
    'menu/findMenuFirstThunk',
    async () => {
        const firstCategory = 0;
        const { data: menu, status, statusText } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + apiPoints.findTopPage.path, {
            firstCategory
        });

        return {menu, status, statusText};
}
);

export default findMenuFirstThunk;
