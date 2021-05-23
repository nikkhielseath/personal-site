import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";

import PlaceholderImg from "../../assets/placeholder.png";

import "./Projects.scss";

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

const ProjectsPage = () => {
  const projectName = "Name";
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const dummyText2 =
    "Lorem ipsum  elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <React.Fragment>
      <main className={"project__container"}>
        <ProjectItem
          name={projectName}
          description={dummyText}
          imgURL={PlaceholderImg}
        />
      </main>
    </React.Fragment>
  );
};

export default ProjectsPage;
