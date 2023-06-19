import type {FC} from 'react';
import React from 'react';
import {TopPagePropsTypes} from "./types";
import HTag from "../../Htag";
import Tag from "../../Tag";

import s from './TopPage.module.scss';
import HhData from "../../HhData";
import {TopLevelCategoryTypes} from "../../../interfaces/page.interface";
import AdvantagesCard from "./components/AdvantagesCard";
import Sort from "../../Sort";
import {SortEnum} from "../../Sort/types";
import {useAppDispatch, useAppSelector} from "../../../redux";
import {setSort} from "../../../redux/slices/sortSlice";
import Products from "../../Products";

const TopPageComponent: FC<TopPagePropsTypes> = ({firstCategory, page, products}) => {
  const {products: sortProducts, sort: sortState} = useAppSelector(state => state.sort);
  const dispatch = useAppDispatch();
  const hhCleanData = page.hh;
  if (hhCleanData) {
    delete hhCleanData.updatedAt; // React ругает поле updatedAt
  }
  const handleSort = (sort: SortEnum) => {
    dispatch(setSort(sort));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperTitle}>
        <HTag tag="h1">{page.title}</HTag>
        {products && <Tag color="grey" size="medium">{products.length}</Tag>}
        <Sort sort={sortState} setSort={handleSort}/>
      </div>

      <div>
        {sortProducts && sortProducts.map(p => (<Products layout product={p} key={p._id}/>))}
      </div>

      <div className={s.wrapperHH}>
        <HTag className={s.hhTitle} tag="h2">{page.category}</HTag>
        <Tag color="red" size="medium">hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategoryTypes.Courses && page.hh && <HhData {...hhCleanData} />}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <HTag className={s.advantages} tag="h2">Преимущества</HTag>
          <div className={s.advantagesWrapper}>
            {page.advantages.map(adv => (
              <AdvantagesCard advantages={adv} key={adv._id}/>
            ))}
          </div>
        </>
      )}
      {page.seoText && <div className={s.descriptionAdvantages} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
      <HTag className={s.skillsTitle} tag="h2">Получаемые навыки</HTag>
      <div className={s.skillsTagWrapper}>
        {page.tags.map(tag => <Tag key={tag} color="primary" size="medium">{tag}</Tag>)}
      </div>
    </div>
  );
};

export default TopPageComponent;
