import React from "react";
import CallToAction from "../CallToAction/CallToAction";

import PlaceholderImage from "../../assets/placeholder.png";
import "./ProjectItem.scss";

const ProjectItem = ({ name = "Name", link, image, description }) => {
  let imgAlt = name,
    imgSrc = PlaceholderImage;
  if (image) {
    imgAlt = image.alt;
    imgSrc = `${image.url}&w=312`;
  }
  return (
    <div className={"project__card"}>
      <img className={"card__img"} alt={imgAlt} src={imgSrc} />
      <div className={"card__details"}>
        <h5 className={"detail__title"}>{name}</h5>
        <CallToAction
          className={"detail__link"}
          type={"external"}
          href={link}
          target={"_blank"}
          rel={"nofollow noreferrer"}
        >
          Link
        </CallToAction>
      </div>
      <div className={"card__description"}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
