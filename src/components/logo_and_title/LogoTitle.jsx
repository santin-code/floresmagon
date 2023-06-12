import React from "react";
import "./logo_title.css";
// import { GiBatWing } from "react-icons/gi";
// import { AiFillGitlab } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const LogoTitle = () => {
  return (
    <header className="title_cologne_container">
      <h1 className="title_cologne">
        {" "}
        {/* <div className="icon_bat_gitlab">
          <GiBatWing className="bat_wing_left" />{" "}
          <AiFillGitlab className="git_lab" />{" "}
          <GiBatWing className="bat_wing_right" />
        </div> */}
        <a
          href="https://api.whatsapp.com/send?phone=527221451394&text=Hola!%20
"
          target="_self"
          rel="noopener noreferrer"
        >
          {" "}
          <RiWhatsappFill className="whatsapp_icon" />
        </a>
      </h1>
    </header>
  );
};

export default LogoTitle;
