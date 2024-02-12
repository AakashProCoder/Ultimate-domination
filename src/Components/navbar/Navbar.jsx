import React from "react";
import "./navbar.css";
import tierbagde from "../../assets/images/tier-bg.png";
import coin from "../../assets/images/coin.png"
function Navbar() {
  return (
    <div className="navbar">
      <div className="header-left">
        <p className="tier-text">Tier</p>
        <div className="tier-container">
          <img src={tierbagde} alt="" />
          <p className="tier-vlue">0</p>
        </div>
      </div>
      <div className="header-rigth flex">
        <img src={coin} alt="" className="coin"/>
        <div className="money-box flex">10000</div>
      </div>
    </div>
  );
}

export default Navbar;
