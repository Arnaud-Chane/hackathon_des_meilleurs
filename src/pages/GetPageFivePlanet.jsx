import React from "react";
import { useState, useEffect } from "react";
import TextDecrivePlanet from "../components/TextDecrivePlanet";
import Card from "../components/Card";
import nimbus from "../assets/images/Wizard/nimbus.svg";
import cheminette from "../assets/images/Wizard/cheminette.svg";
import faucon from "../assets/images/StarWars/faucon-millenium.svg";
import ReservationNavbar from "../components/ReservationNavbar";

function GetPageFivePlanet() {
  const [dataWorld, setDataWorld] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataWorld"));
    if (data) {
      setDataWorld(data);
    }
  }, []);

  console.log(dataWorld);

  return (
    <div className="GetPageFivePlanet">
      <div className="reservation-nav">
        <ReservationNavbar />
      </div>
      <div className="content-page">
        <TextDecrivePlanet />
        <Card cardFront={nimbus} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
        <Card cardFront={faucon} cardBack={cheminette} />
      </div>
    </div>
  );
}
export default GetPageFivePlanet;
