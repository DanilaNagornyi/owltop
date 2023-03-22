import React from "react";
import {HeaderPropsTypes} from "./types";

export default function Header({...props}: HeaderPropsTypes): JSX.Element {
    return (
       <div {...props}>
           Header
       </div>
        );
}
