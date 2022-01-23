import React from "react";
import Page from "../../components/Layout/Page/Page";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

import "./Projects.scss";

const ProjectsPage = ({ projects }) => {
  return (
    <Page
      heroTitle="Projects"
      heroPhrase={"Crafts that I was lucky to be a part of."}
      mainClassName={"project parallax"}
      heroClassName={"parallax__background"}
    >
      <div className={"project__container parallax__foreground"}>
        {projects.map(({ node }, index) => {
          return <ProjectItem {...node} key={`project_${index}`} />;
        })}
      </div>
    </Page>
  );
};

export default ProjectsPage;
