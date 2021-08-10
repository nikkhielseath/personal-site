import React from "react";
import "./Home.scss";
import CallToAction from "../../components/CallToAction/CallToAction";
import SOCIAL_LINKS from "../../components/SEO/socialLinks";

const HomePage = () => {
  return (
    <div className={"home"}>
      <header className={"home__hero"}>
        <div className={"hero__content"}>
          <h3 className={"hero__greet"}>Hi !</h3>
          <h1 className={"hero__intro"}>I am SNikhill :)</h1>
          <div className={"hero__personal-note"}>
            <p>
              I have been shaping the web professionally for 4 years. Learning
              with every problem I faced and constructing an attitude to be less
              wrong every day.
            </p>
          </div>
          <div className={"hero__actions"}>
            <CallToAction to={"/projects"}>projects</CallToAction>
          </div>
        </div>
      </header>
      <footer className={"home__footer"}>
        <div className={"footer__social-links"}>
          {SOCIAL_LINKS.map(({ handle, url }, index) => (
            <a
              key={`socialLink-${index}`}
              href={url}
              target={"_blank"}
              rel={"me noreferrer"}
            >
              @{handle}
            </a>
          ))}
          <a
            key={`socialLink-email`}
            href={
              "mailto:sethnikhil74@gmail.com?body=Hello! I was just viewing your website."
            }
            target={"_blank"}
            rel={"nofollow noreferrer"}
          >
            @email
          </a>
        </div>
        <p className={"footer__signature"}>handcrafted by Yours truly</p>
      </footer>
    </div>
  );
};

export default HomePage;
