import React from "react";
import { graphql } from "gatsby";

import BlogPage from "../../views/Blog/Blog";

const BlogList = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const blogPosts = data.allMarkdownRemark.nodes;
  return (
    <>
      <BlogPage blogPosts={blogPosts} />
    </>
  );
};

export default BlogList;

export const blogPostListQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          subtitle
          canonicalURL
        }
      }
    }
  }
`;
