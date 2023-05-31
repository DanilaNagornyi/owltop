import React from 'react';
import type {FC} from 'react';
import {DividerTypes} from "./types";
import cn from "classnames";

import s from './Divider.module.scss';

const Divider: FC<DividerTypes> = ({className, ...restProps}) => {
  return <hr className={cn(s.hr, className)} {...restProps} />;
};

export default Divider;
