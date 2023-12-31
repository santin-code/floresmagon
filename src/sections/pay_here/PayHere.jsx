import React from "react";
import "./pay_here.css";
import CFE from "../../images/cfelogo.webp";
import MEGACABLE from "../../images/megacable.svg";
import BAIT from "../../images/bait.png";
import TELCEL from "../../images/TELCEL.webp";
import ATT from "../../images/ATT.webp";
import MOVISTAR from "../../images/movistar.png";
import UNEFON from "../../images/UNEFON.png";

const PayHere = () => {
  return (
    <>
      <h1 className="pay_here"> ¡ PAGA AQUÍ ! </h1>
      <div className="services_container">
        <div>
          <img
            src={MEGACABLE}
            alt="logo_megacable"
            className="logo_megacable"
          />
        </div>
        <div>
          <img src={CFE} alt="logo_cfe" className="logo_cfe" />
        </div>
        <div className="telephone_companies">
          <p className="reload">recarga</p>
          <div>
            <img src={BAIT} alt="logo_bait" className="logo_bait" />
            <div className="other_companies">
              <img
                src={TELCEL}
                alt="logo_telcel"
                className="companies border_left"
              />
              <img src={ATT} alt="logo_att" className="companies" />
              <img src={MOVISTAR} alt="logo_movistar" className="companies" />
              <img
                src={UNEFON}
                alt="logo_unefon"
                className="companies border_right"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayHere;
