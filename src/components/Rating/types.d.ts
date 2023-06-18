import {DetailedHTMLProps, HTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface RatingPropsTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: string;
  setRating?: (rating: number) => void;
  error?: FieldError;

}
