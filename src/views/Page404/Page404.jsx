import React from "react";
import "./Page404.scss";
import CallToAction from "../../components/CallToAction/CallToAction";

const Page404 = () => {
  return (
    <React.Fragment>
      <main className={"notFound"}>
        <div className={"notFound__greet"}>
          <h1 className={"greet__title"}>404</h1>
          <p className={"greet__phrase"}>Lost, are we?</p>
        </div>
        <div className={"notFound__quote"}>
          <p>
            To be lost is nothing to fear, for everything that is lost is on the
            path to being found.
          </p>
        </div>
        <div className={"notFound__action"}>
          <CallToAction to={"/"}>Home</CallToAction>
        </div>
      </main>
    </React.Fragment>
  );
};
export default Page404;
