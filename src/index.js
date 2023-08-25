import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pfp from "./images/dp.jpg";
import TitlenButtons from "./TitlenButtons";
import Description from "./Description";
import Socials from "./Socials";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Page = () => {
  return (
    <div className="container">
      <div className="business-card">
        <img src={pfp} className="pfp" alt="mobin's pfp" />
        <TitlenButtons />
        <Description />
        <Socials />
      </div>
    </div>
  );
};
root.render(<Page />);
