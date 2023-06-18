import React, {ForwardedRef, forwardRef} from 'react';
import {CardTypes} from "./types";
import cn from "classnames";

import s from './Card.module.scss';

const Card = forwardRef(({
                           color = 'white',
                           children,
                           className,
                           ...restProps
                         }: CardTypes, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className={cn(s.wrapper, className, {
        [s.blue]: color === 'blue'
      })}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
});

export default Card;
