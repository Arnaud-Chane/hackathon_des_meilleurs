import React from "react";
import { useState, useEffect } from "react";
import TextDecrivePlanet from "../components/TextDecrivePlanet";
import Card from "../components/Card";
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

  console.log(dataWorld);

  return (
    <div className="GetPageFivePlanet">
      <TextDecrivePlanet />
      <Card cardFront={nimbus} cardBack={cheminette} />
      <Card cardFront={faucon} cardBack={cheminette} />
      <Card cardFront={faucon} cardBack={cheminette} />
      <Card cardFront={faucon} cardBack={cheminette} />
      <Card cardFront={faucon} cardBack={cheminette} />
      <Card cardFront={faucon} cardBack={cheminette} />
    </div>
  );
}
export default GetPageFivePlanet;
