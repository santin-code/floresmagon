import React from "react";
import "./logo_arkal_react_icon.css";
import { FaReact } from "react-icons/fa";
// import { SiStarship } from "react-icons/si";

const Logo = () => {
  return (
    <>
      <div className="logo green26f59f">
      CIBER <FaReact  className="green26f59f faReact react_icon"/>  ARKAL{" "} 
      </div>
      <p className="slogan">Simplifying your digital life</p>
    </>
  );
};

export default Logo;
