import React from 'react';
import type { FC } from 'react';
import {MenuItemTypes} from "../../interfaces/menu.interface";
import {TopPageModelTypes} from "../../interfaces/page.interface";
import {ProductModelTypes} from "../../interfaces/product.interface";
import {ParsedUrlQuery} from "querystring";
import {withLayout} from "../../layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";

interface CoursePropsTypes extends Record<string, unknown>{
    menu: MenuItemTypes[],
    firstCategory: number;
    page: TopPageModelTypes;
    products: ProductModelTypes[];
}

const firstCategory = 0;

const Course: FC<CoursePropsTypes> = ({ menu, firstCategory, page, products }) => {

    return (
      <>
          {/*{menu}*/}
          {/*{firstCategory}*/}
          {/*{page}*/}
          {products?.length}
      </>
  );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CoursePropsTypes> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params) {
        return  {
            notFound: true
        };
    }

    try {

        const { data: menu } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory
        });
        const { data: page } = await axios.get<TopPageModelTypes>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
        const { data: products } = await axios.post<ProductModelTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
            category: page.category,
            limit: 10,
        });

        return {
            props: {
                menu,
                firstCategory,
                page,
                products,
            }
        };
    } catch  {
        return {
            notFound: true
        };
    }
};
