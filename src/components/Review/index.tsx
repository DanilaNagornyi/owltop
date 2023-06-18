import React from 'react';
import type {FC} from 'react';
import {ReviewTypes} from "./types";
import cn from "classnames";
import UserIcon from './img/user.svg';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';

import s from './Review.module.scss';
import Rating from "../Rating";


const Review: FC<ReviewTypes> = ({review, className, ...restProps}) => {
  const {name, title, description, rating, createdAt} = review;
  return (
    <div className={cn(s.wrapper, className)} {...restProps}>
      <UserIcon className={s.icon}/>
      <div className={s.wrapperTitle}>
        <span className={s.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={s.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>
      <div className={s.rating}>
        <Rating rating={rating}/>
      </div>
      <div className={s.description}>
        {description}
      </div>
    </div>
  );
};

export default Review;
