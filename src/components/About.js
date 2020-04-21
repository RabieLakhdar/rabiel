import React,{ memo} from "react";
import Fade from "react-reveal/Fade";
import data from "../data";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>
          <Fade bottom cascade>
            Rabiel,?
          </Fade>
        </h1>
        <Fade bottom>
          <p>{data.abouttext}</p>
        </Fade>
      </div>
      {data.ShowAboutImage ? (
        <img
          style={{ width: "600px", height: "600px" }}
          src="https://svgshare.com/i/KBa.svg"
          alt="rabiel, rabie lakhdar remote developer"
        ></img>
      ) : null}
    </div>
  );
};

export default memo(About);
