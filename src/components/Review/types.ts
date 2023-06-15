import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ReviewModelTypes} from "../../interfaces/product.interface";

export interface ReviewTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModelTypes;
}
