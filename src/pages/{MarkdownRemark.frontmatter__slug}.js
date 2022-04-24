import React from "react";
import { graphql } from "gatsby";
import Page from "../components/Layout/Page/Page";

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Page
      heroTitle={frontmatter.title}
      heroPhrase={frontmatter.subtitle}
      mainClassName="about parallax"
      heroClassName="parallax__background"
    >
      <div
        className="about__description parallax__foreground"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Page>
  );
};

export default Template;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
      }
    }
  }
`;
