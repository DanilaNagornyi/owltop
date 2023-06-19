import React from 'react';
import type {FC} from 'react';
import {withLayout} from "../layout";
import Page500 from "../components/PageComponents/Page500";

const ErrorPage: FC = () => {
  return <Page500/>;
};

export default withLayout(ErrorPage);
