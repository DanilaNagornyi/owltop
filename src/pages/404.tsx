import React from 'react';
import type {FC} from 'react';
import {withLayout} from "../layout";
import Page404 from "../components/PageComponents/Page404";

const ErrorPage: FC = () => {
  return <Page404/>;
};

export default withLayout(ErrorPage);
