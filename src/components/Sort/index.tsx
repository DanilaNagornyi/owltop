import type {FC} from 'react';
import React from 'react';
import {SortEnum, SortTypes} from "./types";
import cn from "classnames";
import SortIcon from './img/sort.svg';

import s from './Sort.module.scss';

const Sort: FC<SortTypes> = ({sort, setSort, className, ...restProps}) => {
  return (
    <div className={cn(s.wrapper, className)} {...restProps}>
      <span
        className={cn(s.wrapperIcon, {
          [s.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={s.sortIcon}/>По рейтингу
      </span>
      <span
        className={cn(s.wrapperIcon, {
          [s.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={s.sortIcon}/>По цене
      </span>
    </div>
  );
};

export default Sort;
