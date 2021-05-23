import React from "react";
import CallToAction from "../CallToAction/CallToAction";

import "./ProjectItem.scss";

const ProjectItem = ({ name, imgURL, description }) => {
  return (
    <div className={"project__card"}>
      <img className={"card__img"} alt={name} src={imgURL} />
      <div className={"card__details"}>
        <h4 className={"detail__title"}>{name}</h4>
        <CallToAction className={"detail__link"}>Link</CallToAction>
      </div>
      <div className={"card__description"}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
