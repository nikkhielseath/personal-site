import React from "react";
import { Link } from "gatsby";
import "./CallToAction.scss";

const CallToAction = (props) => {
  if (props.href === null || props.to === null) {
    return (
      <button
        {...props}
        className={`button cta cta--disabled ${props.className || ""}`}
        disabled={true}
        aria-disabled={true}
      >
        {props.children}
      </button>
    );
  } else if (props.type === "external") {
    return (
      <a {...props} className={`button cta ${props.className || ""}`}>
        {props.children}
      </a>
    );
  }
  return (
    <Link {...props} className={`button cta ${props.className || ""}`}>
      {props.children}
    </Link>
  );
};

export default CallToAction;
