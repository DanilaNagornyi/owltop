import React from "react";
import {SideBarPropsTypes} from "./types";
import Menu from "../Menu";

export default function SideBar({...props}: SideBarPropsTypes): JSX.Element {
    return (
       <div {...props}>
           {/*<Menu />*/}
           меню
       </div>
        );
}
