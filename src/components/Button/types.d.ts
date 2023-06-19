import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonPropsTypes extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'ref'> {
    children: ReactNode;
    appearance?: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}
