import {FirstLevelMenuItemTypes} from "../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import {TopLevelCategoryTypes} from "../interfaces/page.interface";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItemTypes[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategoryTypes.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategoryTypes.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategoryTypes.Books},
  {route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategoryTypes.Products},
];

export const priceRu = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
};
