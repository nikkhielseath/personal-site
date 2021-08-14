import React from "react";
import Page from "../../components/Layout/Page/Page";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

import "./Projects.scss";

const ProjectsPage = ({ projects }) => {
  return (
    <Page>
      <main className={"project parallax"}>
        <div className={"project__hero parallax__background"}>
          <h1 className={"hero__title"}>Projects</h1>
          <h6 className={"hero__phrase"}>
            Crafts that I was lucky to be a part of.
          </h6>
        </div>
        <div className={"project__container parallax__foreground"}>
          {projects.map(({ node }, index) => {
            return <ProjectItem {...node} key={`project_${index}`} />;
          })}
        </div>
      </main>
    </Page>
  );
};

export default ProjectsPage;
