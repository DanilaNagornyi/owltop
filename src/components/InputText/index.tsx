import React from 'react';
import type {FC} from 'react';
import {InputTextTypes} from "./types";
import cn from "classnames";

import s from './InputText.module.scss';

const InputText: FC<InputTextTypes> = ({className, type = 'text', ...restProps}) => {

  return (
    <input className={cn(s.input, className)} type={type} {...restProps} />
  );
};

export default InputText;
