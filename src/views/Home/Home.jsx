import React from "react";
import { Helmet } from "react-helmet";
import "./Home.scss";
import CallToAction from "../../components/CallToAction/CallToAction";

const HomePage = () => {
  const socialLinks = [
    { handle: "twitter", url: "https://twitter.com/SethNikhill" },
    {
      handle: "email",
      url:
        "mailto:sethnikhil74@gmail.com?body=Hello! I was just viewing your website.",
    },
    {
      handle: "github",
      url: "https://github.com/SNikhill",
    },
    {
      handle: "youtube",
      url: "https://www.youtube.com/devicenerd",
    },
  ];

  return (
    <div className={"home"}>
      <Helmet>
        <title>SNikhill | Home</title>
      </Helmet>
      <header className={"home__hero"}>
        <div className={"hero__content"}>
          <h3 className={"hero__greet"}>Hi !</h3>
          <h1 className={"hero__intro"}>I am Nikhil Seth :)</h1>
          <div className={"hero__personal-note"}>
            <p>
              I have been shaping the web since I was 12. Learning with every
              problem I faced and constructing an attitude to be less wrong
              every day.
            </p>
          </div>
          <div className={"hero__actions"}>
            <CallToAction to={"/projects"}>projects</CallToAction>
            <CallToAction>blog</CallToAction>
          </div>
        </div>
      </header>
      <footer className={"home__footer"}>
        <div className={"footer__social-links"}>
          {socialLinks.map(({ handle, url }, index) => (
            <a
              key={`socialLink-${index}`}
              href={url}
              target={"_blank"}
              rel={"nofollow noreferrer"}
            >
              @{handle}
            </a>
          ))}
        </div>
        <p className={"footer__signature"}>handcrafted by Yours truly</p>
      </footer>
    </div>
  );
};

export default HomePage;
