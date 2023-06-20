import React from 'react';
import type {FC} from 'react';
import HTag from "../../Htag";
import PTag from "../../PTag";
import Button from "../../Button";
import {useRouter} from "next/router";
import s from './Page404.module.scss';

const Page404: FC = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperContent}>
        <HTag tag="h1">Ошибка 404</HTag>
        <PTag size="medium">Страница не найдена</PTag>
        <Button appearance='primary' className={s.button} onClick={handleRedirect}>На главную</Button>
      </div>
    </div>
  );
};

export default Page404;
