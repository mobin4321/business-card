import React from "react";
import envolope from "./icons/envelope.svg";
import linkedin from "./icons/linkedin.svg";

export default function TitlenButtons() {
  return (
    <div className="titlenbuttons">
      <h1 className="heading">Mobin Ahmed</h1>
      <h5 className="title">MERN Stack Developer</h5>
      <div className="email-linkedin">
        <a class="email-button" href="mailto:mobinahmed4321@gmail.com">
          <img class="email-icon" src={envolope} alt="email icon" />
          <p>Email</p>
        </a>
        <a
          class="linkedin-button"
          href="https://www.linkedin.com/in/mobin4321/"
        >
          <img class="linkedin-icon" src={linkedin} alt="linkedin icon" />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
}
