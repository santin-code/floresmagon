import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import './particles_background.css'
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config"


const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  return (
    <div id="home">
      <Particles className="particles_background" id="tsparticles" options={particlesConfig} init={particlesInit} />
    </div>
  );
};

export default ParticlesBackground;
