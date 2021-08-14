import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/SEO/SEO";
import ProjectsPage from "../views/Projects/Projects";

const Projects = ({ data }) => {
  const pageTitle = "SNikhill's Projects";
  const description =
    "SNikhill develops web application and shapes the future with his open source contribution.";
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
          siteName: pageTitle,
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
    allDatoCmsProject(sort: { fields: priorityOrder, order: DESC }) {
      edges {
        node {
          image {
            alt
            gatsbyImageData(placeholder: BLURRED, imgixParams: { h: "200" })
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
