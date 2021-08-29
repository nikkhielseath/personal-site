import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/SEO/SEO";
import AboutPage from "../views/About/About";

const About = ({ data }) => {
  const content = data.allDatoCmsTale.edges[0];
  return (
    <React.Fragment>
      <Seo title={content.node.articleTitle} />
      <AboutPage content={content} />
    </React.Fragment>
  );
};

export const query = graphql`
  query AboutQuery {
    allDatoCmsTale {
      edges {
        node {
          id
          articleTitle
          articleSubtitle
          articleBody {
            value
          }
        }
      }
    }
  }
`;
export default About;
