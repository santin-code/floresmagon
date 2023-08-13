import React from "react";
import "./logo_arkal_react_icon.css";
import { FaReact } from "react-icons/fa";
// import { SiStarship } from "react-icons/si";

const Logo = () => {
  return (
    <>
      <div className="logo green26f59f">
      ARKAL <FaReact  className="green26f59f faReact react_icon"/>  TECH{" "} 
      </div>
      <p className="slogan">Simplifyng your digital life</p>
    </>
  );
};

export default Logo;
