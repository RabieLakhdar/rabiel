import React, { memo } from "react";
import Fade from "react-reveal/Fade";
import data from "../data";
import { Link } from "react-scroll";
import Logo from "../assetes/Logo";

const Header = () => {
  return (
    <div>
      <h1 className="heading-background">RABIEL</h1>
      <header>
        <h1>
          <Fade bottom cascade>
            <Logo style={{ width: "260px", height: "185px" }} alt="rabiel" />
          </Fade>
        </h1>
      </header>
      <Fade bottom>
        <p className="header-title">
          {data.headerTagline[0]}
          <br></br>
          {data.headerTagline[1]}
          <br></br>
          {data.headerTagline[2]}
          <Link to="contact">
            <span>Contact</span>
          </Link>
        </p>
      </Fade>
    </div>
  );
};

export default memo(Header);
