import React from "react";
import "./diamonds.css";
import Garena from "../../images/a02539775843bd06cae6190613bdabb66003730a.png";

const Diamonds = () => {
  return (
    <section className="section">
      <img src={Garena} alt="logo_garena" className="logo_garena" />
      <p className="permanent_marker">RECARGA DIAMANTES </p>
      <div className="diamond_price_container">
        <div>
          <div className="diamond_info ">
            <p className="red"> DIAMANTES </p>
            <p className="red_color">PRECIO</p>

            <p> <span id="blue_color">110</span> &nbsp; DIAMANTES </p>
            <p>$&nbsp;<span id="blue_color">27</span> &nbsp;</p>

            <p><span id="blue_color">341</span> &nbsp; DIAMANTES</p>
            <p>$&nbsp;<span id="blue_color">67</span> &nbsp;</p>

						<p><span id="blue_color">572</span> &nbsp;DIAMANTES</p>
            <p>$&nbsp;<span id="blue_color">107</span> &nbsp;</p>

						<p><span id="blue_color">1,166</span> &nbsp; DIAMANTES</p>
            <p>$&nbsp;<span id="blue_color">207</span> &nbsp;</p>

						<p><span id="blue_color">2,398</span> &nbsp; DIAMANTES</p>
            <p>$&nbsp;<span id="blue_color">387</span> &nbsp;</p>

						<p><span id="blue_color">MEMBRESIA <br/> SEMANAL</span> &nbsp;</p>
            <p>$&nbsp;<span id="blue_color">50</span> &nbsp;</p>

						<p> <span id="blue_color">MEMBRESIA <br/> MENSUAL</span> &nbsp; </p>
            <p>$&nbsp;<span id="blue_color">210</span> &nbsp;</p>

						
          </div>
        </div>
        <div className="prices_diamonds"></div>
      </div>
    </section>
  );
};

export default Diamonds;
