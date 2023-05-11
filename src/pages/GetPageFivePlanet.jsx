import React from "react";
import { useState, useEffect } from "react";
import TextDecrivePlanet from "../components/TextDecrivePlanet";
import Card from "../components/Card";
import nimbus from "../assets/images/Wizard/nimbus.svg";
import cheminette from "../assets/images/Wizard/cheminette.svg";

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
      <TextDecrivePlanet />
      <Card cardFront={dataWorld.cardImage2} cardBack={dataWorld.cardImage4} />
      {console.log(dataWorld.cardImage3)}
    </div>
  );
}
export default GetPageFivePlanet;
