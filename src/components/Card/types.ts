import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  children: ReactNode;
}
