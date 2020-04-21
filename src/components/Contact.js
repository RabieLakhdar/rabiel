import React,{memo} from "react";
import Fade from "react-reveal/Fade";
import data from "../data";

const Contact = () => {
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            {" "}
            Contact.
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
              Let’s create your next<br></br>
              <span className="amazing-color">experience together</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className="email" title="Rabie, Rabie LAKHDAR if you looking for remote developer">
              {data.contactEmail}
            </a>
            <ul>
              {data.social.map((link, index) => (
                <li key={index}>
                  <a target="_blank" href={link.url} rel="noopener noreferrer" title="Rabie, Rabie LAKHDAR if you looking for remote developer">>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        <span className="footer">
          Made With ❤ by{" "}
          <a
            href="http://rabiel.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rabie LAKHDAR
          </a>
        </span>
      </div>
    );
}

export default memo(Contact);
