import React from "react";
import { graphql } from "gatsby";

import BlogPost from "../views/BlogPost/BlogPost";

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  return (
    <>
      <BlogPost markdownRemark={markdownRemark} />
    </>
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
        canonicalURL
        seoImage
      }
    }
  }
`;
