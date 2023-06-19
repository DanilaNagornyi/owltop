import React, {FunctionComponent, useRef, useState} from "react";
import type {KeyboardEvent} from 'react';
import {LayoutPropsTypes} from "./types";
import s from "./Layout.module.scss";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import {UpArrow} from "../components/UpArrow";
import cn from "classnames";

function Layout({children}: LayoutPropsTypes): JSX.Element {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const handleShowSkipLink = () => {
    setIsSkipLinkDisplayed(true);
  };

  const handleSkipAction = (key: KeyboardEvent) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);

  };

  return (
    <div className={s.wrapper}>
      <a
        onFocus={handleShowSkipLink}
        onKeyDown={handleSkipAction}
        tabIndex={1}
        className={cn(s.skipLink, {
          [s.displayed]: isSkipLinkDisplayed,
        })}>Сразу к содержанию</a>
      <Header className={s.header}/>
      <SideBar className={s.sidebar}/>
      <main className={s.body} ref={bodyRef} tabIndex={0}>
        {children}
      </main>
      <Footer className={s.footer}/>
      <UpArrow/>
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    );
  };
};
