import React from 'react';
import type {FC} from 'react';
import HTag from "../../Htag";
import PTag from "../../PTag";
import Button from "../../Button";
import {useRouter} from "next/router";
import s from './Page500.module.scss';

const Page500: FC = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperContent}>
        <HTag tag="h1">Ошибка 500</HTag>
        <PTag size="medium">Сервер устал, уже чиним</PTag>
        <Button appearance='primary' className={s.button} onClick={handleRedirect}>На главную</Button>
      </div>
    </div>
  );
};

export default Page500;
