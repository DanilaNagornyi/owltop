import React, {useEffect} from 'react';
import type {FC} from 'react';
import {MenuItemTypes} from "../../interfaces/menu.interface";
import {TopPageModelTypes} from "../../interfaces/page.interface";
import {ProductModelTypes} from "../../interfaces/product.interface";
import {ParsedUrlQuery} from "querystring";
import {withLayout} from "../../layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {firstLevelMenu} from "../../helpers/helpers";
import {TopPagePropsTypes} from "../../components/PageComponents/TopPage/types";
import TopPageComponent from "../../components/PageComponents/TopPage";
import {wrapper} from "../../redux";
import {setStaticMenu} from "../../redux/slices/menuSlice";
import {setProductsSort} from "../../redux/slices/sortSlice";
import {apiUrls} from "../../helpers/apiUrls";

const TopPage: FC<TopPagePropsTypes> = ({firstCategory, page, products}) => {

  return (
    <TopPageComponent page={page} firstCategory={firstCategory} products={products}/>
  );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const {data: menu} = await axios.post<MenuItemTypes[]>(apiUrls.topPage.find, {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
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
  }
  try {

    const {data: menu} = await axios.post<MenuItemTypes[]>(apiUrls.topPage.find, {
      firstCategory: firstCategoryIcon.id,
    });

    if (menu.length === 0) {
      return {
        notFound: true
      };
    }

    const {data: page} = await axios.get<TopPageModelTypes>(apiUrls.topPage.byAlias + params.alias);
    const {data: products} = await axios.post<ProductModelTypes[]>(apiUrls.product.find, {
      category: page.category,
      limit: 10,
    });

    await store.dispatch(setStaticMenu(menu));
    await store.dispatch(setProductsSort(products));

    return {
      props: {
        firstCategory: firstCategoryIcon.id,
        page,
        products,
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
});
