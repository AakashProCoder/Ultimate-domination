import React from "react";
import "./continents.css";
function Contients({ continent }) {
  console.log(continent);
  return <div className="continent ">{continent.name}</div>;
}

export default Contients;
