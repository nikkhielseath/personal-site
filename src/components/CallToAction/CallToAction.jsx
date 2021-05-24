import React from "react";
import { Link } from "gatsby";
import "./CallToAction.scss";

const CallToAction = (props) => {
  if (props.type === "external") {
    return (
      <a
        {...props}
        className={`button cta ${props.className || ""}`}
        tabIndex={0}
      >
        {props.children}
      </a>
    );
  }
  return (
    <Link
      {...props}
      className={`button cta ${props.className || ""}`}
      tabIndex={0}
    >
      {props.children}
    </Link>
  );
};

export default CallToAction;
