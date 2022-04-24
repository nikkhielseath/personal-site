import React from "react";
import Page from "../../components/Layout/Page/Page";

import "./BlogPost.scss";

const BlogPost = ({ markdownRemark }) => {
  const { frontmatter, html } = markdownRemark;
  return (
    <Page
      heroTitle={frontmatter.title}
      heroPhrase={frontmatter.subtitle}
      mainClassName="blogPost"
      heroClassName=""
    >
      <div
        className="blogPost__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Page>
  );
};

export default BlogPost;
