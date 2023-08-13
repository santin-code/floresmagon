import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import LogoArkalReactIcon from "./components/logo_arkal_react_icon/LogoArkalReactIcon";
import Nav from "./components/nav/Nav";
import CFE from "./images/cfelogo.webp";
import MEGACABLE from "./images/megacable.svg";

function App() {
  return (
    <div className="App">
      <section className="section">
        <ParticlesBackground />
        <LogoArkalReactIcon />
        <h1> ¡YA PUEDES PAGAR CON NOSOTROS TUS SERVICIOS ! </h1>
        <div className="services_container">
          <div>
            <img src={MEGACABLE} alt="logo_megacable" className="logo_megacable" />
          </div>
          <div>
            <img src={CFE} alt="logo_cfe" className="logo_cfe" />
          </div>
        </div>
        <Nav />
      </section>
      <section className="section"></section>
    </div>
  );
}

export default App;
