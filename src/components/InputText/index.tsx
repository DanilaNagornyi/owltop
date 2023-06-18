import React, {ForwardedRef, forwardRef} from 'react';
import {InputTextTypes} from "./types";
import cn from "classnames";

import s from './InputText.module.scss';

const InputText = forwardRef(({
                                className,
                                type = 'text',
                                error,
                                ...restProps
                              }: InputTextTypes, ref: ForwardedRef<HTMLInputElement>) => {

  return (
    <div className={cn(s.inputWrapper, className)}>
      <input className={cn(s.input, {
        [s.withError]: error,
      })} type={type} ref={ref} {...restProps} />
      {error?.message ? (
        <span className={s.errorText}>{error.message}</span>
      ) : null}
    </div>
  );
});

export default InputText;
