import React from "react";
import { useState, useEffect } from "react";
import TextDecrivePlanet from "../components/TextDecrivePlanet";
import Card from "../components/Card";
import ReservationNavbar from "../components/ReservationNavbar";

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
      <div className="reservation-navbar">
        <ReservationNavbar />
      </div>

      <TextDecrivePlanet />
      <Card
        cardFront={dataWorld.transport4}
        cardBack={dataWorld.cardImage1}
        title={dataWorld.title1}
      />
      <Card
        cardFront={dataWorld.transport5}
        cardBack={dataWorld.cardImage2}
        title={dataWorld.title2}
      />
      <Card
        cardFront={dataWorld.cardImage7}
        cardBack={dataWorld.cardImage3}
        title={dataWorld.title3}
      />
      <Card
        cardFront={dataWorld.cardImage8}
        cardBack={dataWorld.cardImage4}
        title={dataWorld.title4}
      />
      <Card
        cardFront={dataWorld.cardImage9}
        cardBack={dataWorld.cardImage5}
        title={dataWorld.title5}
      />
      <Card
        cardFront={dataWorld.cardImage10}
        cardBack={dataWorld.cardImage6}
        title={dataWorld.title6}
      />

      <div className="description-holiday">
        <div className="title-text">
          <h2>Transport 1: </h2>
          <p>{dataWorld.transport1}</p>
        </div>
        <div className="title-text">
          <h2>Transport 2:</h2>
          <p> {dataWorld.transport2}</p>
        </div>
        <div className="title-text">
          <h2>Destination 1:</h2>
          <p> {dataWorld.destination3}</p>
        </div>
        <div className="title-text">
          <h2>Destination 2:</h2>
          <p> {dataWorld.destination4}</p>
        </div>
        <div className="title-text">
          <h2>Destination 3: </h2>
          <p>{dataWorld.destination5}</p>
        </div>
        <div className="title-text">
          <h2>Destination 4: </h2>
          <p>{dataWorld.destination6}</p>
        </div>
      </div>
    </div>
  );
}
export default GetPageFivePlanet;
