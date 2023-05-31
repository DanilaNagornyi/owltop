import React from 'react';
import type {FC} from 'react';
import {ProductsTypes} from "./types";
import Card from "../Card";

import s from './Products.module.scss';
import Rating from "../Rating";
import cn from "classnames";
import Tag from "../Tag";
import Button from "../Button";
import {priceRu} from "../../helpers/helpers";
import Divider from "../Divider";

const Products: FC<ProductsTypes> = ({product, className}) => {
  return (
    <Card className={cn(s.card, className)}>
      <div className={s.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div>
      <div className={s.title}>{product.title}</div>

      <div className={s.price}>
        {priceRu(product.price)}
        {product.oldPrice &&
            <Tag className={s.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
      </div>

      <div className={s.credit}>
        {priceRu(product.credit)}/<span className={s.month}>мес</span>
      </div>

      <div className={s.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating}/>
      </div>

      <div className={s.tags}>
        {product.categories.map(c => <Tag className={s.tagsCategory} key={c} color="ghost">{c}</Tag>)}
      </div>
      <div className={s.priceTitle}>цена</div>
      <div className={s.creditTitle}>кредит</div>
      <div className={s.rateTitle}>{product.reviewCount} отзывов</div>

      <Divider className={s.line}/>

      <div className={s.description}>{product.description}</div>
      <div className={s.feature}>фичи</div>

      <div className={s.advantagesWrapper}>
        {product.advantages ? (
          <div className={s.advantages}>
            <span className={s.advTitle}>Приимущества</span>
            <div>{product.advantages}</div>
          </div>
        ) : null}

        {product.disadvantages ? (
          <div className={s.disadvantages}>
            <span className={s.advTitle}>Недостатки</span>
            <div>{product.disadvantages}</div>
          </div>
        ) : null}
      </div>

      <Divider className={s.line}/>

      <div className={s.actions}>
        <Button>Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">Узнать подробнее</Button>
      </div>
    </Card>
  );
};

export default Products;
