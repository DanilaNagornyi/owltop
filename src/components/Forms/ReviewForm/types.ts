import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ReviewFormTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
}
