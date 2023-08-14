import React from "react";
import "./formalities.css";

const Formalities = () => {
  return (
    <>
      <section className="section">
        <h2 className="permanent_marker"> TRAMITAMOS </h2>
        <div className="tramites">
          <p> </p>
          <p>REQUISITOS</p>

          <p>ACTA DE NACIMIENTO CERTIFICADA </p>
          <p>
            -&nbsp;CURP <br /> -&nbsp; NOMBRE DEL PADRE, MADRE O DE LA PERSONA
            QUE TE REGISTRO ( SI NO TIENES TU CURP TE LA PODEMOS TRAMITAR)
          </p>

          <p>
            ANTECEDENTES NO PENALES &nbsp; (&nbsp; SI YA ESTAS REGISTRADO&nbsp;){" "}
          </p>
          <p>
            SI YA ESTAS REGISTRADO: <br /> -&nbsp;CURP <br /> -&nbsp;CONTRASEÑA{" "}
            <br /> -&nbsp;CREDENCIAL DE ELECTOR
          </p>

          <p>
            ANTECEDENTES NO PENALES &nbsp; (&nbsp; SI AUN NO ESTAS
            REGISTRADO&nbsp;){" "}
          </p>
          <p>
            SI AUN NO ESTAS REGISTRADO: <br /> -&nbsp;CURP <br />{" "}
            -&nbsp;CREDENCIAL DE ELECTOR <br /> -&nbsp;CORREO ELECTRÓNICO
          </p>

          <p>NUMERO DE SEGURO SOCIAL</p>
          <p>
            -&nbsp;CURP <br /> -&nbsp;CORREO ELECTRÓNICO <br />
          </p>
        </div>
      </section>
    </>
  );
};

export default Formalities;
