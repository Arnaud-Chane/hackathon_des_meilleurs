import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAPIData from "../API/FetchData";
import CardSocle from "../components/CardSocle";
import dumbledore from "../assets/images/Wizard/dumbledore.svg";
import caribbean from "../assets/images/CaribbeanCruise/Caribbean.svg";
import lordOfTheRing from "../assets/images/MiddleEarth/lord-of-the-rings.svg";
import galaxie from "../assets/images/StarWars/galaxie.svg";
import avatar from "../assets/images/Pandora/avatar_3.svg";

function Homepage() {
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function getDataLoad() {
      let data = await getAPIData();
      const API = [
        {
          transform: "perspective(90px) rotateY(5deg)",
          image: galaxie,
          path: "star-wars",
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
          image: lordOfTheRing,
          path: "middle-earth",
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
          image: avatar,
          path: "pandora",
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
          image: caribbean,
          path: "caribbean-cruise",
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
          image: dumbledore,
          path: "wizard",
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
  const handleClick = (item) => {
    localStorage.setItem("dataWorld", JSON.stringify([item]));
  };


  return (
    <div className="Homepage">
      {dataAPI.map((itemCard, index) => (
        <CardSocle
          transform={itemCard.transform}
          image={itemCard.image}
          zIndex={itemCard.zIndex}
          key={index}
          index={index}
          handleClick={() => {
            handleClick(itemCard);
          }}
        />
        <Link to={`${itemCard.path}`} key={index} >
          <CardSocle
            transform={itemCard.transform}
            image={itemCard.image}
            zIndex={itemCard.zIndex}
          />
        </Link>
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
