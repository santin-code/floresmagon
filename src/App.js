import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import LogoArkalReactIcon from "./components/logo_arkal_react_icon/LogoArkalReactIcon";
import Nav from "./components/nav/Nav";
import Diamonds from "./sections/diamonds_freefire/Diamonds";
import FinalLogo from "./sections/final_logo/FinalLogo";
import Formalities from "./sections/formalities/Formalities";
import PayHere from "./sections/pay_here/PayHere";

function App() {
  return (
    <div className="App">
      <section className="section">
        <ParticlesBackground />
        <LogoArkalReactIcon />
        <PayHere />

        <Nav />
      </section>
        <Diamonds />
        <Formalities />
        <FinalLogo />
    </div>
  );
}

export default App;
