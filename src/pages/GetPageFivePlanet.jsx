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
      setDataWorld(data);
    }
  }, []);

  return (
    <div className="GetPageFivePlanet">
      <TextDecrivePlanet />
      {dataWorld.map((data, i) => (
        <div className="card-data" key={[i]}>
          <Card cardFront={data.image} cardBack={cheminette} />
        </div>
      ))}
    </div>
  );
}
export default GetPageFivePlanet;
