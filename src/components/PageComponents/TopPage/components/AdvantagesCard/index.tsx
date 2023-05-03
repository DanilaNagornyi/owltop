import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import type {FC} from 'react';
import s from './AdvantagesCard.module.scss';
import cn from "classnames";
import DoneIcon from './img/done.svg';
import {TopPageAdvantageTypes} from "../../../../../interfaces/page.interface";

interface AdvantagesCardTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantages: TopPageAdvantageTypes;
}

const AdvantagesCard: FC<AdvantagesCardTypes> = ({advantages, className, ...restProps}) => {
  const {title, description} = advantages;

  return (
    <div className={cn(s.wrapper, className)} {...restProps}>
      <DoneIcon className={s.icon}/>
      <div className={s.wrapperText}>
        <span className={s.title}>{title}</span>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};

export default AdvantagesCard;
