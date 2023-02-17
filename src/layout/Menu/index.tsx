import React, {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItemTypes} from "../../interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
// import {TopLevelCategoryTypes} from "../../interfaces/page.interface";
import s from './Menu.module.scss';
import cn from "classnames";

const firstLevelMenu: FirstLevelMenuItemTypes[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategoryTypes.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategoryTypes.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategoryTypes.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategoryTypes.Products },
];

export default function Menu(): JSX.Element {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((menu) => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(s.firstLevel, {
                                [s.firstCategoryActive]: menu.id === firstCategory,
                            }) }>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {menu.id === firstCategory && buildSecondLevel()}
                    </div>
                ) )}
            </>
        );
    };

    const buildSecondLevel = () => {
        return (
            <div>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={s.secondLevel}>{m._id.secondCategory}</div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = () => {

    };

    return (
       <div className={s.menu}>
           {buildFirstLevel()}
       </div>
        );
}
