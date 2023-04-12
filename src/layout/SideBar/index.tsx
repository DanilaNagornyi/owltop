import React from "react";
import {SideBarPropsTypes} from "./types";
import Menu from "../Menu";
import LogoOwl from '../logoOwl.svg';
import cn from "classnames";

import s from './SideBar.module.scss';

export default function SideBar({className, ...props}: SideBarPropsTypes): JSX.Element {
  return (
    <div {...props} className={cn(s.sidebarWrapper, className)}>
      <LogoOwl className={s.logo}/>
      <div>Поиск</div>
      <Menu/>
    </div>
  );
}
