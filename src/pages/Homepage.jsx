import React, { useState, useEffect } from "react";
import getAPIData from "../API/FetchData";
import CardSocle from "../components/CardSocle";
import dumbledore from "../assets/images/Wizard/dumbledore.svg";
import caribbean from "../assets/images/CaribbeanCruise/Caribbean.svg";
import lordOfTheRing from "../assets/images/MiddleEarth/lord-of-the-rings.svg";
import galaxie from "../assets/images/StarWars/galaxie.svg";
import avatar from "../assets/images/Pandora/avatar.svg";

function Homepage() {

  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function getDataLoad() {
      let data = await getAPIData();
      const API = [
        {
          transform: "perspective(90px) rotateY(5deg)",
          image: dumbledore,
          zIndex: "10",
          id: 1,
          univers: "Far far away",
          info: {
            transport: ["Millennium Falcon", "Star Destroyer"],
            guide: "Jar jar binks",
            destination: ["Death star", "Endor", "Naboo", "Tatooine"],
          },
        },
        {
          transform: "perspective(90px) rotateY(3deg)",
          image: caribbean,
          zIndex: "20",
          id: 2,
          univers: "Middle Earth",
          info: {
            transport: ["Gwaihir", "Horse"],
            guide: "Golum",
            destination: ["The counter", "Helm Deep", "The Moria", "Rivendell"],
          },
        },
        {
          transform: "perspective(90px) rotateY(0deg)",
          image: lordOfTheRing,
          zIndex: "100",
          id: 3,
          univers: "Pandora",
          info: {
            transport: ["Ikran", "C-21 Dragon Assault Ship"],
            guide: "Neytiri",
            destination: [
              "Hometree",
              "RDA Camp",
              "Three Brothers Rocks",
              "Cove of the Ancestors",
            ],
          },
        },
        {
          transform: "perspective(90px) rotateY(358deg)",
          image: galaxie,
          zIndex: "20",
          id: 4,
          univers: " Caribbean cruise",
          info: {
            transport: ["Black Pearl", "Flying Dutchman"],
            guide: "Calypso",
            destination: [
              "Tortuga island",
              "Port Royal",
              "Rum island",
              "Isla de la Muerta",
            ],
          },
        },
        {
          transform: "perspective(90px) rotateY(356deg)",
          image: avatar,
          zIndex: "10",
          id: 5,
          univers: "Wizard's",
          info: {
            transport: ["Nimbus 2000", "Floo powder"],
            guide: "Dobby",
            destination: [
              "Hogwards",
              "The Burrow",
              "Malfoy Manor",
              "Diagon alley",
            ],
          },
        },
      ];
      data = API;
      setDataAPI(data);
    }
    getDataLoad();
  }, []);


  return (
    <div className="Homepage">
      {dataAPI.map((itemCard, index) => (
        <CardSocle transform={itemCard.transform} image={itemCard.image} zIndex={itemCard.zIndex} key={index} />
      ))}
      {/* {dataAPI.map((data) => (
        <div key={data.info.guide}>
          <li >{data.id}</li>
          <li >{data.info.guide}</li>
        </div>
      ))} */}
    </div>
  );
}

export default Homepage;
