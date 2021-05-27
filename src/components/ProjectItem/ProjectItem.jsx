import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import CallToAction from "../CallToAction/CallToAction";

import "./ProjectItem.scss";

const ProjectItem = ({ name = "Name", link, image, description }) => {
  return (
    <div className={"project__card"}>
      <GatsbyImage
        className={"card__img"}
        alt={image.alt}
        image={image.gatsbyImageData}
      />
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
