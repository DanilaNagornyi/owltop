import React, {useState} from 'react';
import type {FC} from 'react';
import {ProductsTypes} from "./types";
import Card from "../Card";

import s from './Products.module.scss';
import Rating from "../Rating";
import cn from "classnames";
import Tag from "../Tag";
import Button from "../Button";
import {declOfNum, priceRu} from "../../helpers/helpers";
import Divider from "../Divider";
import Image from "next/image";
import Review from "../Review";
import ReviewForm from "../Forms/ReviewForm";

const Products: FC<ProductsTypes> = ({product, className}) => {
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  const handleShowReview = (): void => {
    setIsReviewOpen(!isReviewOpen);
  };
  return (
    <>
      <Card className={cn(s.card, className)}>
        <div className={s.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}/>
        </div>
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
        <div
          className={s.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>

        <Divider className={s.line}/>

        <div className={s.description}>{product.description}</div>
        <div className={s.feature}>
          {product.characteristics.map(c => (
            <div className={s.characteristics} key={c.name}>
              <span className={s.charName}>{c.name}</span>
              <span className={s.charDots}/>
              <span className={s.charValue}>{c.value}</span>
            </div>
          ))}
        </div>

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

        <Divider className={cn(s.line, s.line2)}/>

        <div className={s.actions}>
          <Button>Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpen ? 'down' : 'right'}
            onClick={handleShowReview}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card color="blue" className={cn(s.reviews, {
        [s.opened]: isReviewOpen,
        [s.closed]: !isReviewOpen,
      })}>
        {product.reviews.map(r => (
          <>
            <Review key={r._id} review={r}/>
            <Divider/>
          </>
        ))}
        <ReviewForm productId={product._id}/>
      </Card>
    </>
  );
};

export default Products;
