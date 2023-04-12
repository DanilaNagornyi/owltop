import React, {useState} from "react";
import {FirstLevelMenuItemTypes, PageItemTypes} from "../../interfaces/menu.interface";
import s from './Menu.module.scss';
import cn from "classnames";
import {useAppSelector} from "../../redux";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";


export default function Menu(): JSX.Element {
  const {menu, firstCategory} = useAppSelector(state => state.menu);
  const [activeMenu, setActiveMenu] = useState('');
  const router = useRouter();
  const handleOpenSecondLevel = (secondCategory: string): void => {
    if (activeMenu && secondCategory === activeMenu) {
      setActiveMenu('');
    } else {
      setActiveMenu(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((itemMenu) => (
          <div key={itemMenu.route}>
            <Link href={`/${itemMenu.route}`}>
              <div className={cn(s.firstLevel, {
                [s.firstCategoryActive]: itemMenu.id === firstCategory,
              })}>
                {itemMenu.icon}
                <span>{itemMenu.name}</span>
              </div>
            </Link>
            {itemMenu.id === firstCategory && buildSecondLevel(itemMenu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItemTypes) => {
    return (
      <div className={s.secondBlock}>
        {menu.map(m => {
          const isOpened = m.pages.map(p => p.alias).includes(router.asPath.split('/')[2]);

          return (
            <div key={m._id.secondCategory}>
              <div className={s.secondLevel}
                   onClick={() => handleOpenSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <div className={cn(s.secondLevelBlock, {
                [s.secondLevelBlockOpened]: isOpened || activeMenu === m._id.secondCategory,
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItemTypes[], route: string) => {
    return (
      pages.map(p => (
        <Link href={`/${route}/${p.alias}`} key={p.alias} className={cn(s.thirdLevel, {
          [s.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
        })}>
          {p.category}
        </Link>
      ))
    );
  };

  return (
    <div className={s.menu}>
      {buildFirstLevel()}
    </div>
  );
}
