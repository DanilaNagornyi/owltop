import React, {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef} from "react";
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
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(Number(rating));
  }, [rating, error]);

  const handleComputeFocus = (r: number, i: number): number => {
    if (!isEditable) return -1;
    if (!rating && i === 0) return 0;
    if (Number(rating) === r + 1) return 0;
    return -1;
  };

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
          tabIndex={handleComputeFocus(Number(rating), i)}
          onKeyDown={handleSpace}
          ref={r => ratingArrayRef.current?.push(r)}
        >
                    <StarIcon/>
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

  const handleSpace = (key: KeyboardEvent) => {
    if (!isEditable || !setRating) return;

    if (key.code === 'ArrowRight' || key.code === 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        key.preventDefault();
        setRating(Number(rating) < 5 ? Number(rating) + 1 : 5);
      }
      ratingArrayRef.current?.[Number(rating)]?.focus();
    }

    if (key.code === 'ArrowLeft' || key.code === 'ArrowDown') {
      key.preventDefault();
      setRating(Number(rating) > 1 ? Number(rating) - 1 : 1);
      ratingArrayRef.current?.[Number(rating) - 2]?.focus();

    }
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
