import React from "react";
import ProjectsPage from "../views/Projects/Projects";
import { graphql } from "gatsby";

const Projects = ({ data }) => {
  return (
    <React.Fragment>
      <ProjectsPage projects={data.allDatoCmsProject.edges} />
    </React.Fragment>
  );
};

export default Projects;
export const query = graphql`
  query ProjectsQuery {
    allDatoCmsProject {
      edges {
        node {
          image {
            alt
            url
          }
          name
          link
          description
        }
      }
    }
  }
`;
