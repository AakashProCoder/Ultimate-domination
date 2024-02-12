import React from "react";
import "./menu.css";
import HalfMap from "../../layout/HalfMap";
import Navbar from "../../Components/navbar/Navbar";
import profilePicture from "../../assets/images/menu-profile.png";
import editIcon from "../../assets/images/edit.png";
import settingIcon from "../../assets/images/setting.png";
import helpIcon from "../../assets/images/help.png";
import storeIcon from "../../assets/images/store.png";
import inventryIcon from "../../assets/images/inventory.png";
import { UseDispatch } from "react-redux";
import { homeScreenAction } from "../../store/homeScreemUi";
import { useNavigate } from "react-router-dom";

function Menu() {
  function openSetting() {}
  function openShope() {}
  function openInventry() {}
  function openHelp() {}
  const navigate = useNavigate();
  return (
    <HalfMap>
      <div className="manu">
        <header>
          <Navbar />
        </header>
        <main className="flex main">
          <p>Guest</p>
          <div className="player-profile-container ">
            <img
              src={profilePicture}
              alt="profile"
              id="player-profile-picture"
            />
            <div className="profile-picture-edit-bg flex activeBtn">
              <img src={editIcon} alt="edit" id="profile-picture-icon" />
            </div>
          </div>
          <div
            id="quickplay-btn"
            className="flex modes-btn-txt modes-btn-wh activeBtn"
            onClick={() => {
              navigate("/playground");
            }}
          >
            Quick Play
          </div>
          <div
            id="singleplayer-btn"
            className="flex modes-btn-txt modes-btn-wh activeBtn"
          >
            SinglePlayer
          </div>
          <div
            id="multiplayer-btn"
            className="flex modes-btn-txt modes-btn-wh activeBtn"
          >
            Multiplayer
          </div>
        </main>
        <footer className=" footerIcons flex ">
          <div className=" left-icons felx ">
            <div className="flex footer-buttons activeBtn">
              <img src={settingIcon} alt="" />
            </div>
            <div className=" flex footer-buttons activeBtn">
              <img src={helpIcon} alt="" />
            </div>
          </div>
          <div className="rigth-icons flex">
            <div className="flex footer-buttons activeBtn">
              <img src={storeIcon} alt="" />
            </div>
            <dir className="flex footer-buttons activeBtn">
              <img src={inventryIcon} alt="" />
            </dir>
          </div>
        </footer>
      </div>
    </HalfMap>
  );
}

export default Menu;
