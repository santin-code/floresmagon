import React from "react";
import "./logo_title.css";
import { RiWhatsappFill } from "react-icons/ri";

const LogoTitle = () => {
  return (
    <div className="title_cologne_container">
      <div className="title_cologne">
        {" "}
        <a
          href="https://api.whatsapp.com/send?phone=527221451394&text=Hola!%20
"
          target="_self"
          rel="noopener noreferrer"
        >
          {" "}
          <RiWhatsappFill className="whatsapp_icon" />
        </a>
      </div>
    </div>
  );
};

export default LogoTitle;
