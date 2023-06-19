/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {useState} from "react";
import {FirstLevelMenuItemTypes, PageItemTypes} from "../../interfaces/menu.interface";
import s from './Menu.module.scss';
import cn from "classnames";
import {useAppSelector} from "../../redux";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";
import {motion} from 'framer-motion';
import {variants, variantsChildren} from "./data";

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
              <motion.div
                layout
                // @ts-ignore TS ругает transition, поправлю позже
                variants={variants}
                initial={isOpened || activeMenu === m._id.secondCategory ? 'visible' : 'hidden'}
                animate={isOpened || activeMenu === m._id.secondCategory ? 'visible' : 'hidden'}
                className={s.secondLevelMenu}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItemTypes[], route: string) => {
    return (
      pages.map(p => (
        <motion.div
          key={p.alias}
          variants={variantsChildren}
        >
          <Link href={`/${route}/${p.alias}`} className={cn(s.thirdLevel, {
            [s.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
          })}>
            {p.category}
          </Link>
        </motion.div>
      ))
    );
  };

  return (
    <div className={s.menu}>
      {/*<div className={s.secondLevelBlock}>test</div>*/}
      {buildFirstLevel()}
    </div>
  );
}
