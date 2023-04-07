import React from "react";
import {FirstLevelMenuItemTypes, PageItemTypes} from "../../interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import {TopLevelCategoryTypes} from "../../interfaces/page.interface";
import s from './Menu.module.scss';
import cn from "classnames";
import {useAppSelector} from "../../redux";

const firstLevelMenu: FirstLevelMenuItemTypes[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategoryTypes.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategoryTypes.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategoryTypes.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategoryTypes.Products },
];

export default function Menu(): JSX.Element {
    const { menu, firstCategory } = useAppSelector(state => state.menu);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((itemMenu) => (
                    <div key={itemMenu.route}>
                        <a href={`/${itemMenu.route}`}>
                            <div className={cn(s.firstLevel, {
                                [s.firstCategoryActive]: itemMenu.id === firstCategory,
                            }) }>
                                {itemMenu.icon}
                                <span>{itemMenu.name}</span>
                            </div>
                        </a>
                        {itemMenu.id === firstCategory && buildSecondLevel(itemMenu)}
                    </div>
                ) )}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItemTypes) => {
        return (
            <div className={s.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={s.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(s.secondLevelBlock, {
                            [s.secondLevelBlockOpened]: m.isOpened,
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItemTypes[], route: string) => {
        return (
            pages.map(p => (
                <a key={p.alias} href={`/${route}/${p.alias}`} className={cn(s.thirdLevel, {
                    [s.thirdLevelActive]: false
                })}>
                    {p.category}
                </a>
            ))
        );
    };

    return (
       <div className={s.menu}>
           {buildFirstLevel()}
       </div>
        );
}
