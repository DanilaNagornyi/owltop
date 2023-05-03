import React from "react";
import {FooterPropsTypes} from "./types";
import cn from "classnames";
import s from "./Footer.module.scss";
import PTag from "../../components/PTag";
import {format} from "date-fns";

export default function Footer({className, ...restProps}: FooterPropsTypes): JSX.Element {
  return (
    <footer className={cn(className, s.wrapperFooter)} {...restProps}>
      <PTag className={s.copyright}>OwlTop © {format(new Date(), 'yyyy')} Все права защищены</PTag>
      <PTag className={s.userContract} href="#">Пользовательское соглашение</PTag>
      <PTag className={s.political} href="#">Политика конфиденциальности</PTag>
    </footer>
  );
}
