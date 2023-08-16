import React from "react";
import LogoDirection from "../../images/LogoDireccionArkal.svg";
import "./final_logo.css";
import LogoTitle from "../../components/logo_and_title/LogoTitle";

const FinalLogo = () => {
  return (
    <section className="section">
      <div>
        <img
          src={LogoDirection}
          alt="logo_direction"
          className="logo_direction"
        />
        <LogoTitle />
      </div>
    </section>
  );
};

export default FinalLogo;
