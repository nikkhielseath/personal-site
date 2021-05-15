import * as React from "react";
import "../styles/style.scss";

const HomePage = () => {
  const dummyText = "It is okay to be scared";
  return (
    <React.Fragment>
      <h1>{dummyText}</h1>
      <h2>{dummyText}</h2>
      <h3>{dummyText}</h3>
      <h4>{dummyText}</h4>
    </React.Fragment>
  );
};

export default HomePage;
