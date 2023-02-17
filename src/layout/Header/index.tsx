import React from "react";
import {HeaderPropsTypes} from "./types";
import cn from "classnames";
import s from "./Header.module.scss";

export default function Header({...props}: HeaderPropsTypes): JSX.Element {
    return (
       <div {...props}>
           Header
       </div>
        )
};