import React from "react";
import Page from "../../components/Layout/Page/Page";

import "./Blog.scss";

const PostDetails = ({ title, date, description }) => {
  return (
    <div className="post">
      <h3 className="post__title">{title}</h3>
      <small className="post__details">{date}</small>
      <p className="post__description">{description}</p>
    </div>
  );
};

const BlogPage = ({ blogPosts = [] }) => (
  <Page
    heroTitle={"Blog"}
    heroPhrase={"tales written by me"}
    mainClassName="blog"
    heroClassName=""
  >
    <div className="blog__description">
      {blogPosts.map((posts) => {
        const { title, subtitle, date } = posts.frontmatter;
        return <PostDetails title={title} description={subtitle} date={date} />;
      })}
    </div>
  </Page>
);
export default BlogPage;
