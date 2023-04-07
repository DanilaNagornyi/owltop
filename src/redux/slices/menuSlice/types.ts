import {MenuItemTypes} from "../../../interfaces/menu.interface";
import {TopLevelCategoryTypes} from "../../../interfaces/page.interface";

interface FetchedMenu {
    isFetched: true;
    isFetching: boolean;
    menu: MenuItemTypes[];
    firstCategory: TopLevelCategoryTypes;
}

interface UnFetchedMenu {
    isFetched: false;
    isFetching: boolean;
    menu: [];
    firstCategory: TopLevelCategoryTypes;
}

export type MenuStateType = FetchedMenu | UnFetchedMenu;
