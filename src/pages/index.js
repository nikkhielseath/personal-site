import * as React from "react";
import "../styles/style.scss";

const HomePage = () => {
  const headingText = "It is okay to be scared";
  const bodyText = "You need to still keep moving forward";
  return (
    <React.Fragment>
      <h1>{headingText}</h1>
      <h2>{headingText}</h2>
      <h3>{headingText}</h3>
      <h4>{headingText}</h4>
      <p>{bodyText}</p>
    </React.Fragment>
  );
};

export default HomePage;
