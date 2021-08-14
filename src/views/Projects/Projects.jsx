import React from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import Header from "../../components/Layout/Header/Header";

import "./Projects.scss";

const ProjectsPage = ({ projects }) => {
  return (
    <React.Fragment>
      <div className={"page"}>
        <Header />
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
      </div>
    </React.Fragment>
  );
};

export default ProjectsPage;
