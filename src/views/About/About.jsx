import React from "react";
import Page from "../../components/Layout/Page/Page";

import "./About.scss";

const AboutPage = () => {
  return (
    <Page
      heroTitle={"About"}
      heroPhrase={"A tale on me written by me."}
      mainClassName={"about parallax"}
      heroClassName={"parallax__background"}
    >
      <div className="about__description parallax__foreground">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec
          tincidunt praesent semper. Sit amet volutpat consequat mauris nunc
          congue nisi. Proin fermentum leo vel orci porta non pulvinar neque.
          Urna duis convallis convallis tellus id interdum. Netus et malesuada
          fames ac turpis egestas integer eget aliquet. Pretium quam vulputate
          dignissim suspendisse in. Turpis egestas integer eget aliquet nibh
          praesent. At imperdiet dui accumsan sit amet nulla facilisi morbi
          tempus. Mattis nunc sed blandit libero volutpat. Sed egestas egestas
          fringilla phasellus faucibus scelerisque eleifend. Auctor eu augue ut
          lectus arcu bibendum at varius. Leo vel fringilla est ullamcorper.
          Auctor eu augue ut lectus arcu bibendum at. Iaculis urna id volutpat
          lacus laoreet non curabitur gravida arcu. Sit amet cursus sit amet.
          Massa eget egestas purus viverra accumsan in. Id donec ultrices
          tincidunt arcu non sodales. Pellentesque habitant morbi tristique
          senectus et. Eu sem integer vitae justo eget magna fermentum. Tempor
          id eu nisl nunc mi ipsum faucibus. Non odio euismod lacinia at quis
          risus sed. Volutpat blandit aliquam etiam erat velit scelerisque in
          dictum. Sed lectus vestibulum mattis ullamcorper velit sed. Est
          pellentesque elit ullamcorper dignissim cras tincidunt. Convallis a
          cras semper auctor neque. Laoreet suspendisse interdum consectetur
          libero id faucibus nisl tincidunt eget. Est ante in nibh mauris cursus
          mattis molestie.{" "}
        </p>
      </div>
    </Page>
  );
};
export default AboutPage;
