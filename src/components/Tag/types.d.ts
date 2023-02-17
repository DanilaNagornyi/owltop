import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagPropsTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 'small' | 'medium';
    children: ReactNode;
    color: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}