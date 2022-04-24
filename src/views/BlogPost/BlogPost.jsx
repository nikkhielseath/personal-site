import React from "react";
import Page from "../../components/Layout/Page/Page";
import SEO from "../../components/SEO/SEO";

import "./BlogPost.scss";

const BlogPost = ({ markdownRemark }) => {
  const { frontmatter, html } = markdownRemark;
  const { title, subtitle } = frontmatter;
  return (
    <>
      <SEO title={title} description={subtitle} />
      <Page
        heroTitle={title}
        heroPhrase={subtitle}
        mainClassName="blogPost"
        heroClassName="blogPost__hero"
      >
        <div
          className="blogPost__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Page>
    </>
  );
};

export default BlogPost;
