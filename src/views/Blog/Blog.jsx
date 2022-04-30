import React from "react";
import Page from "../../components/Layout/Page/Page";

import "./Blog.scss";

const BlogPage = ({ blogPosts = [] }) => (
  <Page
    heroTitle={"Blog"}
    heroPhrase={"tales written by me"}
    mainClassName="blog parallax"
    heroClassName="parallax__background"
  >
    <div className="blog__description parallax__foreground">
      {blogPosts.map((posts) => {
        const { title } = posts.frontmatter;
        return <h1>{title}</h1>;
      })}
    </div>
  </Page>
);
export default BlogPage;
