import React from 'react';
import type {FC} from 'react';
import {TopPagePropsTypes} from "./types";
import Htag from "../../Htag";
import Tag from "../../Tag";

import s from './TopPage.module.scss';
import Card from "../../Card";

const TopPageComponent: FC<TopPagePropsTypes> = ({firstCategory, page, products}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperTitle}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="grey" size="medium">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>

      <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>

      <div className={s.wrapperHH}>
        <Htag tag="h2">{page.category}</Htag>
        <Tag color="red" size="medium">hh.ru</Tag>
      </div>
      <div className={s.hh}>
        <Card/>
      </div>
    </div>
  );
};

export default TopPageComponent;
