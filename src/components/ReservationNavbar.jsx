import React, { useState, useEffect } from "react";
import dobby from "../assets/images/Wizard/dobby.svg";

function ReservationNavbar() {
  const [dataWorld, setDataWorld] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataWorld"));
    if (data) {
      setDataWorld(...data);
    }
  }, []);

  const ecriture = function (lettre, nombre) {
    if (nombre < lettre.length) {
      setTimeout(() => {
        setDescription((prevDesc) => prevDesc + lettre[nombre]);
        ecriture(lettre, nombre + 1);
      }, 20);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ecriture(dataWorld.description, 0);
    }, 1000);
  }, [dataWorld.description]);

  return (
    <div className="ReservationNavbar">
      <div className="planet-page-title">{dataWorld.path}</div>
      <div className="planet-page-button-reservation">
        <button className="planet-page-button" type="button">
          Reservation
        </button>
      </div>
      <div className="planet-page-guide">
        <div className="planet-page-guide-name">{dataWorld.guide_name}</div>
        <img src={dataWorld.guideImg} alt={dataWorld.guide_name} className="planet-page-guide-img" />
      </div>
    </div>
  );
}

export default ReservationNavbar;
