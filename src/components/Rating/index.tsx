import React, {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from "react";
import {RatingPropsTypes} from "./types";
import StarIcon from './star.svg';
import cn from "classnames";
import s from "./Rating.module.scss";

const Rating = forwardRef(({
                             isEditable = false,
                             rating,
                             setRating,
                             className,
                             error,
                             ...props
                           }: RatingPropsTypes, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(Number(rating));
  }, [rating, error]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(s.star, {
            [s.withError]: !!error,
            [s.field]: i < currentRating,
            [s.editable]: isEditable,
          })}
          onMouseEnter={(() => changeDisplay(i + 1))}
          onMouseLeave={() => changeDisplay(Number(rating))}
          onClick={() => clickRating(i + 1)}
        >
                    <StarIcon
                      tabIndex={isEditable ? 0 : -1}
                      onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
      );
    });
    setRatingArray(updatedArray);
  };
  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);

  };

  const clickRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;

    setRating(i);
  };

  return (
    <div{...props} className={cn(s.wrapper, className)} ref={ref}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
      {error ? (
        <span className={s.errorText}>{error.message}</span>
      ) : null}
    </div>);
});

export default Rating;
