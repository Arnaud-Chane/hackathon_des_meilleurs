import React, { useState, useEffect } from "react";
import getAPIData from "../API/FetchData";
import CardSocle from "../components/CardSocle";
import dumbledore from "../assets/images/dumbledore.svg";
import caribbean from "../assets/images/Caribbean.svg";
import lordOfTheRing from "../assets/images/lord-of-the-rings.svg";
import galaxie from "../assets/images/galaxie.svg";
import avatar from "../assets/images/avatar.svg";


function Homepage() {
  const transformCard = [
    "rotate3d(2, -8, -1, 50deg) scale(1) matrix(2, 0, 0, 1, 45, 35)",
    "rotate3d(2, -8, -1, 30deg) scale(1.1) matrix(1.5, 0, 0, 1, 10, 0)",
    "rotate3d(0, 0, 0, 0deg) scale(1.2) scaleX(1.5)",
    "rotate3d(2, 8, 1, 30deg) scale(1.1)  matrix(1.5, 0, 0, 1, -10, 0)",
    "rotate3d(1, 10, 1, 50deg) scale(1) matrix(2, 0, 0, 1, -45, 35)",
  ];

  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function getDataLoad() {
      let data = await getAPIData();
      const API = [
        {
          transform: "perspective(90px) rotateY(5deg)",
          image: dumbledore,
          zIndex: "10",
          univers: "Far far away",
          imgURLUnivers: "../assets/",
          info: {
            transport: ["Millennium Falcon", "Star Destroyer"],
            guide: "Jar jar binks",
            destination: ["Death star", "Endor", "Naboo", "Tatooine"],
            imgURLDestination: ["../assets/1", "../assets/2" ]
          },
        },
        {
          transform: "perspective(90px) rotateY(3deg)",
          image: caribbean,
          zIndex: "20",
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
        <li key={data.info.guide}>{data.info.guide}</li>
      ))} */}
    </div>
  );
}

export default Homepage;
