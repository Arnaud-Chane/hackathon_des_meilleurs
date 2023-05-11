import React from "react";
import dobby from "../assets/images/Wizard/dobby.svg";

function ReservationNavbar() {
  return (
    <div className="ReservationNavbar">
      <div className="planet-page-title">Wizard</div>
      <div className="planet-page-button-reservation">
        <button className="planet-page-button" type="button">
          Reservation
        </button>
      </div>
      <div className="planet-page-guide">
        <div className="planet-page-guide-name">Dobby</div>
        <img src={dobby} alt="dobby" className="planet-page-guide-img" />
      </div>
    </div>
  );
}

export default ReservationNavbar;
