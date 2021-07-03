import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import SOCIAL_LINKS from "./socialLinks";

const Seo = ({ title, description, author, twitter, openGraph }) => {
  return (
    <React.Fragment>
      <Helmet>
        <html lang={"en"} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        {SOCIAL_LINKS.map(({ url }, index) => (
          <link rel={"me"} type={"text/html"} href={url} key={index} />
        ))}

        {/*TWITTER DETAILS*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content={twitter.username} />
        <meta name="twitter:creator" content={twitter.creator} />
        <meta property="twitter:title" content={twitter.title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={twitter.image} />

        {/*OPEN GRAPHS*/}
        <meta property="og:site_name" content={openGraph.siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={openGraph.url} />
        <meta property="og:title" content={openGraph.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={openGraph.image} />
        <meta property="og:image:alt" content={openGraph.imageAlt} />
      </Helmet>
    </React.Fragment>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  twitter: PropTypes.shape({
    username: PropTypes.string,
    creator: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }),
  openGraph: PropTypes.shape({
    siteName: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
  }),
};

Seo.defaultProps = {
  title: "Nikhil Seth | SNikhill - Human, Learner, Developer",
  description:
    "Nikhil Seth aka SNikhill is a forever learner, human, blogger, web developer and much more.",
  author: "SNikhill",
  twitter: {
    username: "@SethNikhill",
    creator: "@SethNikhill",
    title: "Nikhil Seth | SNikhill - Human, Learner, Developer",
    image:
      "https://www.datocms-assets.com/48735/1625302614-personalsiteimagenew.png",
  },
  openGraph: {
    siteName: "Nikhil Seth | SNikhill - Human, Learner, Developer",
    url: "",
    title: "Nikhil Seth | SNikhill - Human, Learner, Developer",
    image:
      "https://www.datocms-assets.com/48735/1625302614-personalsiteimagenew.png",
    imageAlt: "Nikhil Seth | SNikhill - Human, Learner, Developer",
  },
};

export default Seo;
