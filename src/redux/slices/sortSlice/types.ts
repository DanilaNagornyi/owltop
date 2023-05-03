import {SortEnum} from "../../../components/Sort/types";
import {ProductModelTypes} from "../../../interfaces/product.interface";

interface FetchedSort {
  isFetched: true;
  isFetching: boolean;
  sort: SortEnum;
  products: ProductModelTypes[];
}

interface UnFetchedSort {
  isFetched: false;
  isFetching: boolean;
  sort: SortEnum;
  products: [];
}

export type SortStateType = FetchedSort | UnFetchedSort;
