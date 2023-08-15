import React from "react";
import "./rombo.css";
import { GiRocket } from "react-icons/gi";

const Rombo = () => {
  return (
    <>
      <div className="rombo_principal_container">
        <div>
          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div class="rombo2">actas de nacimiento certificadas</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div class="rombo2">antecedentes no penales</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div class="rombo2">número de seguro social</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div class="rombo2">vigencia de derechos IMSS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rombo;
