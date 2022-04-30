import React from "react";
import Page from "../../components/Layout/Page/Page";

import "./Blog.scss";

const PostDetails = ({ title, date, url, description }) => {
  return (
    <div className="post">
      <h3 className="post__title">
        <a rel="bookmark" href={url}>
          {title}
        </a>
      </h3>
      <small className="post__meta">{date}</small>
      <p className="post__description">{description}</p>
    </div>
  );
};

const BlogPage = ({ blogPosts = [] }) => (
  <Page
    heroTitle={"Blog"}
    heroPhrase={"Learnings from my experience"}
    mainClassName="blog"
    heroClassName=""
  >
    <div className="blog__description">
      {blogPosts.map((posts) => {
        const { title, subtitle, date, slug } = posts.frontmatter;
        return (
          <PostDetails
            title={title}
            url={slug}
            description={subtitle}
            date={date}
          />
        );
      })}
    </div>
  </Page>
);
export default BlogPage;
