import React from "react";
import Page from "../../components/Layout/Page/Page";
import SEO from "../../components/SEO/SEO";

import "./BlogPost.scss";

const BlogPost = ({ markdownRemark }) => {
  const { frontmatter, html } = markdownRemark;
  const { title, subtitle, canonicalURL, date } = frontmatter;
  return (
    <>
      <SEO
        twitter={{ card: "player" }}
        title={title}
        description={subtitle}
        canonicalURL={canonicalURL}
      />
      <Page
        heroTitle={title}
        heroPhrase={""}
        mainClassName="blogPost"
        heroClassName="blogPost__hero"
      >
        <small className="blogPost__meta">{date}</small>
        <div
          className="blogPost__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Page>
    </>
  );
};

export default BlogPost;
