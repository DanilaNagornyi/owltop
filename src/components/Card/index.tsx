import React from 'react';
import type {FC} from 'react';
import {CardTypes} from "./types";
import cn from "classnames";

import s from './Card.module.scss';


const Card: FC<CardTypes> = ({color = 'white', children, className, ...restProps}) => {
  return (
    <div className={cn(s.wrapper, className, {
      [s.blue]: color === 'blue'
    })} {...restProps}>
      {children}
    </div>
  );
};

export default Card;
