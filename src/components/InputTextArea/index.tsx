import React, {ForwardedRef, forwardRef} from 'react';
import cn from "classnames";

import s from './InputTextArea.module.scss';
import {TextAriaTypes} from "../InputText/types";

const InputTextArea = forwardRef(({
                                    className,
                                    error,
                                    ...restProps
                                  }: TextAriaTypes, ref: ForwardedRef<HTMLTextAreaElement>) => {

  return (
    <div className={cn(s.wrapperArea, className)}>
      <textarea className={cn(s.inputArea, {
        [s.withError]: error,
      })} ref={ref} {...restProps} />
      {error?.message ? (
        <span className={s.errorText}>{error.message}</span>
      ) : null}
    </div>
  );
});

export default InputTextArea;
