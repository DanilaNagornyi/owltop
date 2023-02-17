import React from "react";
import {TagPropsTypes} from "./types";
import cn from "classnames";
import s from "./Tag.module.scss";

export default function Tag({size = "medium", children, color = 'ghost', href, className, ...props}: TagPropsTypes): JSX.Element {
    return (
        <div className={cn(s.tag, className, {
        [s.small]: size === "small",
        [s.medium]: size === "medium",
        [s.ghost]: color === "ghost",
        [s.red]: color === "red",
        [s.green]: color === "green",
        [s.grey]: color === "grey",
        [s.primary]: color === "primary",
    })}
        {...props}
    >{
        href ? <a href={href}>{children}</a> : <>{children}</>
        }
    </div>);
}