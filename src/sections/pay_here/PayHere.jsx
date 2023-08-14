import React from "react";
import "./pay_here.css";
import CFE from "../../images/cfelogo.webp";
import MEGACABLE from '../../images/megacable.svg';
import BAIT from "../../images/bait.png";

const PayHere = () => {
  return (
    <>
      <h1 className="pay_here permanent_marker"> ¡ PAGA AQUÍ ! </h1>
      <div className="services_container">
        <div>
          <img
            src={MEGACABLE}
            alt="logo_megacable"
            className="logo_megacable min_opacity"
          />
        </div>
        <div>
          <img src={CFE} alt="logo_cfe" className="logo_cfe min_opacity" />
        </div>
        <div>
          <p className="reload">recarga</p>
          <img src={BAIT} alt="logo_bait" className="logo_bait min_opacity" />
        </div>
      </div>
    </>
  );
};

export default PayHere;
