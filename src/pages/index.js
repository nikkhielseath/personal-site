import * as React from "react";

import Home from "../views/Home/Home";
import Seo from "../components/SEO/SEO";

const Index = () => {
  return (
    <React.Fragment>
      <Seo />
      <Home />
    </React.Fragment>
  );
};

export default Index;
