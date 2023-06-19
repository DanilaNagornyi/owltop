import React, {useState} from 'react';
import type {FC} from 'react';
import {ReviewFormTypes, ReviewResponseTypes, ReviewUseFormTypes} from "./types";
import cn from "classnames";

import s from './ReviewForm.module.scss';
import InputText from "../../InputText";
import Rating from "../../Rating";
import InputTextArea from "../../InputTextArea";
import Button from "../../Button";
import CloseIcon from './img/close.svg';
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {apiUrls} from "../../../helpers/apiUrls";

const ReviewForm: FC<ReviewFormTypes> = ({productId, className, ...restProps}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {register, control, handleSubmit, formState: {errors}, reset} = useForm<ReviewUseFormTypes>();

  const onSubmit = async (formData: ReviewUseFormTypes) => {
    try {
      const {data} = await axios.post<ReviewResponseTypes>(apiUrls.review.createReview, {...formData, productId});
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage('Что-то пошло не так');
      }
    } catch (e) {
      console.error(e);
      setErrorMessage('Что-то пошло не так, мы уже чиним :)');
    }
  };

  const handleCloseSubmitInfo = () => {
    setErrorMessage('');
    setIsSuccess(false);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(s.wrapper, className)} {...restProps}>
        <InputText
          {...register('name', {required: {value: true, message: 'Обязательное поле'}})}
          placeholder="Имя"
          error={errors.name}
        />
        <InputText
          {...register('title', {required: {value: true, message: 'Заполните заголовок'}})}
          placeholder="Заголовок отзыва"
          className={s.inputTitle}
          error={errors.title}
        />
        <div className={s.wrapperRating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: {value: true, message: 'Поставьте оценку'}}}
            render={({field}) => (
              <Rating isEditable rating={field.value} setRating={field.onChange} ref={field.ref} error={errors.rating}/>
            )}
          />
        </div>
        <InputTextArea
          {...register('description', {required: {value: true, message: 'Напишите отзыв'}})}
          placeholder="Текст отзыва"
          className={s.description}
          error={errors.description}
        />
        <div className={s.wrapperSubmit}>
          <Button appearance="primary" type="submit">Отправить</Button>
          <span className={s.submitInfo}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess ? (
        <div className={s.wrapperSuccess}>
          <div className={s.successTitle}>Ваш отзыв принят</div>
          <div className={s.successDescription}>
            Спасибо за отзыв, после модерации мы его опубликуем!
          </div>
          <CloseIcon onClick={handleCloseSubmitInfo} className={s.successClose}/>
        </div>
      ) : null}
      {errorMessage ? (
        <div className={s.wrapperError}>
          <div className={s.successTitle}>Ошибка</div>
          <div className={s.successDescription}>
            {errorMessage}
          </div>
          <CloseIcon onClick={handleCloseSubmitInfo} className={s.errorClose}/>
        </div>
      ) : null}
    </form>
  );
};

export default ReviewForm;
