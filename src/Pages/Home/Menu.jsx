import React from "react";
import CommanMap from "../../layout/CommanMap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <CommanMap>
      <div>
        <Link to={"/"}>Back to flash</Link>
      </div>
    </CommanMap>
  );
}

export default Menu;
