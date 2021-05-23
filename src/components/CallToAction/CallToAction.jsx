import React from "react";
import { Link } from "gatsby";
import "./CallToAction.scss";

const CallToAction = (props) => {
  return (
    <Link
      className={`button cta ${props.className || ""}`}
      tabIndex={0}
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default CallToAction;
