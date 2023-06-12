import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
// import ItemContainer from "./components/item_container/ItemContainer";
import LogoTitle from "./components/logo_and_title/LogoTitle";
// import { IoDiamond } from "react-icons/io5";
// import { GiPodiumWinner } from "react-icons/gi";

function App() {
  return (
    <div className="App">
       <ParticlesBackground />
      <LogoTitle /> 
      {/* <div className="principal_container">
        <ItemContainer title={"DIAMANTES"}>
          <IoDiamond className="io_diamond" />
        </ItemContainer>
      </div> */}
      {/* <div className="description_page">
        <h1 >
          LIDER EN VENTA DE DIAMANTES <br/> Y RECARGAS ELECTRONICAS
        </h1>
      </div> */}
    </div>
  );
}

export default App;
