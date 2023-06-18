import React, {FunctionComponent} from "react";
import {LayoutPropsTypes} from "./types";
import s from "./Layout.module.scss";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import {UpArrow} from "../components/UpArrow";

function Layout({children}: LayoutPropsTypes): JSX.Element {
  return (
    <div className={s.wrapper}>
      <Header className={s.header}/>
      <SideBar className={s.sidebar}/>
      <div className={s.body}>
        {children}
      </div>
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
