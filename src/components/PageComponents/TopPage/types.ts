import {TopLevelCategoryTypes, TopPageModelTypes} from "../../../interfaces/page.interface";
import {ProductModelTypes} from "../../../interfaces/product.interface";

export interface TopPagePropsTypes extends Record<string, unknown> {
  firstCategory: TopLevelCategoryTypes;
  page: TopPageModelTypes;
  products: ProductModelTypes[];
}
