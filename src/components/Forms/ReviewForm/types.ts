import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ReviewFormTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
}

export interface ReviewUseFormTypes {
  name: string;
  title: string | number;
  description: string;
  rating: string;
}

export interface ReviewResponseTypes {
  message: string;
}
