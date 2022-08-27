import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import SOCIAL_LINKS from "./socialLinks";

const SITE_TITLE = "SNikhill - Human, Learner, Engineer";
const PERSONAL_DESCRIPTION =
  "SNikhill is a Consistent Learner, Voracious Reader, Human, Software Engineer and much more.";
const DEFAULT_SEO_IMAGE_URL =
  "https://www.datocms-assets.com/48735/1661583134-2022-08-27_12-22.png";

const Seo = ({
  title,
  description,
  author,
  twitter,
  openGraph,
  canonicalURL,
  seoImageURL,
}) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {canonicalURL && <link rel="canonical" href={canonicalURL} />}
      {SOCIAL_LINKS.map(({ id, url }) => (
        <link type="text/html" href={url} key={id} />
      ))}

      {/* TWITTER DETAILS */}
      <meta
        property="twitter:card"
        content={twitter.card || "summary_large_image"}
      />
      <meta
        property="twitter:site"
        content={twitter.username || "@SethNikhill"}
      />
      <meta
        name="twitter:creator"
        content={twitter.creator || "@SethNikhill"}
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={seoImageURL || twitter.image || DEFAULT_SEO_IMAGE_URL}
      />

      {/* OPEN GRAPHS */}
      <meta property="og:site_name" content={openGraph.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={openGraph.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={seoImageURL || openGraph.image || DEFAULT_SEO_IMAGE_URL}
      />
      <meta property="og:image:alt" content={openGraph.imageAlt} />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  canonicalURL: PropTypes.string,
  seoImageURL: PropTypes.string,
  twitter: PropTypes.shape({
    card: PropTypes.string,
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
  title: SITE_TITLE,
  description: PERSONAL_DESCRIPTION,
  author: "SNikhill",
  canonicalURL: "",
  seoImageURL: DEFAULT_SEO_IMAGE_URL,
  twitter: {
    username: "@SethNikhill",
    creator: "@SethNikhill",
    title: SITE_TITLE,
    image: DEFAULT_SEO_IMAGE_URL,
  },
  openGraph: {
    siteName: SITE_TITLE,
    url: "https://snikhill.tech",
    title: SITE_TITLE,
    image: DEFAULT_SEO_IMAGE_URL,
    imageAlt: SITE_TITLE,
  },
};

export default Seo;
