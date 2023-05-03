import React from 'react';
import type {FC} from 'react';
import {HhDataPropsTypes} from "./types";
import cn from "classnames";

import s from './HhData.module.scss';
import Card from "../Card";
import RateIcon from './img/circleStar.svg';
import {priceRu} from "../../helpers/helpers";

const HhData: FC<HhDataPropsTypes> = ({count, juniorSalary, middleSalary, seniorSalary, className, ...restProps}) => {
  return (
    <div className={cn(s.wrapper, className)} {...restProps}>
      <Card className={s.count}>
        <div className={s.title}>Всего вакансий</div>
        <div className={s.value}>{count}</div>
      </Card>
      <Card className={s.salary}>
        <div>
          <div className={s.title}>Начальный</div>
          <div className={s.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={s.rate}>
            <RateIcon className={s.iconFill}/>
            <RateIcon/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <div className={s.title}>Средний</div>
          <div className={s.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={s.rate}>
            <RateIcon className={s.iconFill}/>
            <RateIcon className={s.iconFill}/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <div className={s.title}>Профессионал</div>
          <div className={s.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={s.rate}>
            <RateIcon className={s.iconFill}/>
            <RateIcon className={s.iconFill}/>
            <RateIcon className={s.iconFill}/>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HhData;
