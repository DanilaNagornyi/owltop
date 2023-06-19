import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import up from './img/arrowUp.svg';
import close from './img/close.svg';
import burger from './img/burger.svg';

export const Icons = {
  up,
  close,
  burger,
};

export type IconsButtonType = keyof typeof Icons;

export interface ButtonIconTypes extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconsButtonType;
  appearance?: 'primary' | 'white';
  arrow?: 'right' | 'down' | 'none';
}
