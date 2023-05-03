import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SortTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price
}
