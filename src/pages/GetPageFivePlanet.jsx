import React from "react";
import { useState, useEffect } from "react";
import TextDecrivePlanet from "../components/TextDecrivePlanet";
import Card from "../components/Card";
import ReservationNavbar from "../components/ReservationNavbar";
import nimbus from "../assets/images/Wizard/nimbus.svg";
import cheminette from "../assets/images/Wizard/cheminette.svg";
import faucon from "../assets/images/StarWars/faucon-millenium.svg";

function GetPageFivePlanet() {
  const [dataWorld, setDataWorld] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataWorld"));
    if (data) {
      setDataWorld(...data);
    }
  }, []);

  return (
    <div className="GetPageFivePlanet">
      <div className="reservation-navbar">
        <ReservationNavbar />
      </div>

      <div className="content-page">
        <Card cardFront={nimbus} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
      </div>
      <TextDecrivePlanet />
    </div>
  );
}
export default GetPageFivePlanet;
