import {DetailedHTMLProps, HTMLAttributes} from 'react';
import {ProductModelTypes} from "../../interfaces/product.interface";

export interface ProductsTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModelTypes;
}
