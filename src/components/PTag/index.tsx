import React from "react";
import {PTagPropsTypes} from "./types";
import cn from "classnames";
import s from "./P.module.scss";

export default function PTag({size = "medium", href, children, className, ...props}: PTagPropsTypes): JSX.Element {
    return (
        <p className={cn(s.p, className, {
        [s.small]: size === "small",
        [s.medium]: size === "medium",
        [s.large]: size === "large",
    })}
        {...props}
    >{
        href ? <a href={href} target="_blank">{children}</a> : <>{children}</>
    }
    </p>);
}