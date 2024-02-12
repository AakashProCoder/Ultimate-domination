import React from "react";
import CommanMap from "../../layout/CommanMap";
import "./flashscreen.css";
import flashScreenLogo from "../../assets/images/game-logo.png";
import { Link } from "react-router-dom";
function FlashScreen() {
  return (
    <CommanMap>
      <div className="flashScreen">
        <img src={flashScreenLogo} alt="logo" />
        <Link to="/home" id="splash-play-button" className="activeBtn">
          Play
        </Link>
      </div>
    </CommanMap>
  );
}

export default FlashScreen;
