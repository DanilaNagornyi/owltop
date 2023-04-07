import {TopLevelCategoryTypes} from "./page.interface";

export interface PageItemTypes {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItemTypes {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageItemTypes[];
}

export interface FirstLevelMenuItemTypes {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategoryTypes;
}
