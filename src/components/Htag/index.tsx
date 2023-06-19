import {HTagPropsTypes} from "./Htag.types";
import s from './Htag.module.scss';
import cn from "classnames";

const HTag = ({tag, className, children, ...restProps}: HTagPropsTypes): JSX.Element => {

  switch (tag) {
    case 'h1':
      return <h1 className={cn(s.h1, className)}{...restProps}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(s.h2, className)}{...restProps}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(s.h3, className)}{...restProps}>{children}</h3>;
    default:
      return <></>;
  }

};
export default HTag;
