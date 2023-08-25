import React from "react";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import github from "./icons/github.svg";
import twitter from "./icons/twitter.svg";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://twitter.com/mobinahmed4321">
        <img src={twitter} alt="" />
      </a>
      <a href="https://www.facebook.com/mobinahmedd">
        <img src={facebook} alt="" />
      </a>
      <a href="https://instagram.com/mobinahmedd">
        <img src={instagram} alt="" />
      </a>
      <a href="https://github.com/mobin4321">
        <img src={github} alt="" />
      </a>
    </div>
  );
}
