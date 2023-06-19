import React from 'react';
import type {FC} from 'react';
import {ButtonIconTypes, Icons} from "./types";
import s from './ButtonIcon.module.scss';
import cn from "classnames";

const ButtonIcon: FC<ButtonIconTypes> = ({appearance = 'primary', icon, className, ...restProps}) => {
  const IconComponent = Icons[icon];

  return (
    <button className={cn(s.button, className, {
      [s.primary]: appearance === 'primary',
      [s.white]: appearance === 'white',
    })}
            {...restProps}
    >
      <IconComponent/>
    </button>
  );
};

export default ButtonIcon;
