import React from "react";
import { Link } from "gatsby";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

import "./Projects.scss";

const ProjectsPage = ({ projects }) => {
  return (
    <React.Fragment>
      <div className={"page"}>
        <header>
          <nav className={"head__nav"}>
            <Link to={"/"}>Home</Link>
          </nav>
        </header>
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
