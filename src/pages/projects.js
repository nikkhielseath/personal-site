import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/SEO/SEO";
import ProjectsPage from "../views/Projects/Projects";

const Projects = ({ data }) => {
  const pageTitle = "Nikhil Seth | SNikhill's Projects ";
  const description =
    "Nikhil Seth aka SNikhill develops web application and shapes the future with his open source contribution.";
  const pageImage =
    "https://www.datocms-assets.com/48735/1621896576-projectsimage.png";
  return (
    <React.Fragment>
      <Seo
        title={pageTitle}
        description={description}
        twitter={{
          title: pageTitle,
          image: pageImage,
        }}
        openGraph={{
          title: pageTitle,
          image: pageImage,
          imageAlt: pageTitle,
        }}
      />
      <ProjectsPage projects={data.allDatoCmsProject.edges} />
    </React.Fragment>
  );
};

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

export default Projects;
