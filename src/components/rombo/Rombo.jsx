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
            <div className="rombo2">actas de nacimiento certificadas</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">antecedentes no penales</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">número de seguro social</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">vigencia de derechos IMSS</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">citas para verificación vehicular</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">ampliación y reducción de documentos</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">escáner</div>
          </div>


          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">curp</div>
          </div>
          

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">citas INE</div>
          </div>

          <div className="rombo_container">
            <GiRocket className="rocket" />
            <div className="rombo2">recibo de luz </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Rombo;
