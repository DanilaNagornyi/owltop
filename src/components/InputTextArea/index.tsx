import React from 'react';
import type {FC} from 'react';
import cn from "classnames";

import s from './InputTextArea.module.scss';
import {TextAriaTypes} from "../InputText/types";

const InputTextArea: FC<TextAriaTypes> = ({className, type = 'text', ...restProps}) => {

  return (
    <textarea className={cn(s.inputArea, className)} {...restProps} />
  );
};

export default InputTextArea;
