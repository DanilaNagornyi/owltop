import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface RatingPropsTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}