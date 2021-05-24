import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

import PlaceholderImg from "../../assets/placeholder.png";
import "./Projects.scss";

const ProjectsPage = () => {
  const Projects = [
    {
      name: "Dummy",
      imgURL: PlaceholderImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie.",
    },
    {
      name: "Dummy",
      imgURL: PlaceholderImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie.",
    },
    {
      name: "Dummy",
      imgURL: PlaceholderImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie.",
    },
    {
      name: "Dummy",
      imgURL: PlaceholderImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie.",
    },
    {
      name: "Dummy",
      imgURL: PlaceholderImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie.",
    },
    {
      name: "Dummy",
      imgURL: PlaceholderImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie.",
    },
    {
      name: "Dummy",
      imgURL: PlaceholderImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie.",
    },
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>SNikhill | Projects</title>
      </Helmet>
      <div className={"page"}>
        <header>
          <nav className={"head__nav"}>
            <Link to={"/"}>Home</Link>
          </nav>
        </header>
        <main className={"project"}>
          <div className={"project__hero"}>
            <h2 className={"hero__title"}>Projects</h2>
            <h6 className={"hero__phrase"}>
              Crafts that I was lucky to be a part of.
            </h6>
          </div>
          <div className={"project__container"}>
            {Projects.map((props, index) => (
              <ProjectItem {...props} key={`project_${index}`} />
            ))}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ProjectsPage;
