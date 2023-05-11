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

      <TextDecrivePlanet />
      <Card
        cardFront={dataWorld.destination1}
        cardBack={dataWorld.cardImage1}
      />
      <Card
        cardFront={dataWorld.destination2}
        cardBack={dataWorld.cardImage2}
      />
      <Card
        cardFront={dataWorld.destination3}
        cardBack={dataWorld.cardImage3}
      />
      <Card
        cardFront={dataWorld.destination4}
        cardBack={dataWorld.cardImage4}
      />
      <Card
        cardFront={dataWorld.destination5}
        cardBack={dataWorld.cardImage5}
      />
      <Card
        cardFront={dataWorld.destination6}
        cardBack={dataWorld.cardImage6}
      />
    </div>
  );
}
export default GetPageFivePlanet;
