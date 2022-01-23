import React from "react";
import { Link } from "gatsby";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className={"head__nav"}>
        <Link to={"/"}>Home</Link>
      </nav>
    </header>
  );
};

export default Header;
