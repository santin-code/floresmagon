import React from "react";
import "./diamonds.css";

const Diamonds = () => {
  return (
    <section className="section">
			<p className="permanent_marker">RECARGA DIAMANTES <br/> FREE FIRE</p>
      <div className="diamond_price_container">
			<img
        className="free_fire_gif"
        src="https://i.giphy.com/media/Bk1etlqzsxWNSi0HFn/giphy.webp"
        alt="free_fire"
      />
			<img
        className="free_fire_gif"
        src="https://i.giphy.com/media/Bk1etlqzsxWNSi0HFn/giphy.webp"
        alt="free_fire"
      />
			<div>

			</div>
			<div className="prices_diamonds"></div>
			</div>
    </section>
  );
};

export default Diamonds;
