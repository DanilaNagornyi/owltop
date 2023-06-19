import React from 'react';
import type {FC} from 'react';
import {withLayout} from "../../layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {firstLevelMenu} from "../../helpers/helpers";
import {MenuItemTypes} from "../../interfaces/menu.interface";
import {ParsedUrlQuery} from "querystring";
import {TopLevelCategoryTypes} from "../../interfaces/page.interface";
import {useAppSelector, wrapper} from "../../redux";
import findMenuFirstThunk from "../../redux/thunks/menuThunks/findMenuFirstThunk";
import {setCategory} from "../../redux/slices/menuSlice";

interface TypePageTypes extends Record<string, unknown> {
  menu?: MenuItemTypes[],
  firstCategory?: TopLevelCategoryTypes;
}

const TypePage: FC<TypePageTypes> = () => {
  const {firstCategory} = useAppSelector(state => state.menu);

  return <div>CoursesPage -- {firstCategory}</div>;
};

export default withLayout(TypePage);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {

  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryIcon = firstLevelMenu.find(m => m.route == params.type);
  if (!firstCategoryIcon) {
    return {
      notFound: true
    };
  } else {
    await store.dispatch(setCategory(firstCategoryIcon.id));
  }
  try {
    await store.dispatch(findMenuFirstThunk());

    return {
      props: {}
    };
  } catch {
    return {
      notFound: true
    };
  }
});
