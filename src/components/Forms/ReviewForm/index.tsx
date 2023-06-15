import React from 'react';
import type {FC} from 'react';
import {ReviewFormTypes} from "./types";
import cn from "classnames";

import s from './ReviewForm.module.scss';
import InputText from "../../InputText";
import Rating from "../../Rating";
import InputTextArea from "../../InputTextArea";
import Button from "../../Button";
import CloseIcon from './img/close.svg';

const ReviewForm: FC<ReviewFormTypes> = ({productId, className, ...restProps}) => {
  return (
    <>
      <div className={cn(s.wrapper, className)} {...restProps}>
        <InputText placeholder="Имя"/>
        <InputText placeholder="Заголовок отзыва" className={s.inputTitle}/>
        <div className={s.wrapperRating}>
          <span>Оценка:</span>
          <Rating rating={0}/>
        </div>
        <InputTextArea placeholder="Текст отзыва" className={s.description}/>
        <div className={s.wrapperSubmit}>
          <Button appearance="primary">Отправить</Button>
          <span className={s.submitInfo}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={s.wrapperSuccess}>
        <div className={s.successTitle}>Ваш отзыв принят</div>
        <div className={s.successDescription}>
          Спасибо за отзыв, после модерации мы его опубликуем!
        </div>
        <CloseIcon className={s.successClose}/>
      </div>
    </>
  );
};

export default ReviewForm;
