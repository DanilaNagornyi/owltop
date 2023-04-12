import React from 'react';
import type {FC} from 'react';
import {CardTypes} from "./types";
import cn from "classnames";

import s from './Card.module.scss';


const Card: FC<CardTypes> = ({className, ...restProps}) => {
  return <div className={cn(s.wrapper, className)} {...restProps}>Card</div>;
};

export default Card;
