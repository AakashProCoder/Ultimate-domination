import React from "react";
import { useSelector } from "react-redux";
import Contients from "../../Components/continents/Contients";
import "./playground.css"
function Playground() {
  const gameStates = useSelector((state) => state.gameStateReducer);
  const continents = gameStates.continents;

  //   console.log(continents);
  return (
    <div className="playground ">
        <div className="worldMap"> {continents.map((continent) => {
        return <Contients key={continent.name} continent={continent} />;
      })}</div>
     
    </div>
  );
}

export default Playground;
