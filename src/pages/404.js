import * as React from "react";
import Page404 from "../views/Page404/Page404";
import Seo from "../components/SEO/SEO";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Seo />
      <Page404 />
    </React.Fragment>
  );
};

export default NotFoundPage;
