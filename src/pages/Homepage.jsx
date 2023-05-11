import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAPIData from "../API/FetchData";
import CardSocle from "../components/CardSocle";
import dumbledore from "../assets/images/Wizard/dumbledore.svg";
import HP_1 from "../assets/images/Wizard/HP_1.svg";
import HP_2 from "../assets/images/Wizard/HP_2.svg";
import HP_3 from "../assets/images/Wizard/HP_3.svg";
import HP_4 from "../assets/images/Wizard/HP_4.svg";
import HP_5 from "../assets/images/Wizard/HP_5.svg";
import HP_6 from "../assets/images/Wizard/HP_6.svg";
import caribbean from "../assets/images/CaribbeanCruise/Caribbean.svg";
import CAR_1 from "../assets/images/CaribbeanCruise/CAR_1.svg";
import CAR_2 from "../assets/images/CaribbeanCruise/CAR_2.svg";
import CAR_3 from "../assets/images/CaribbeanCruise/CAR_3.svg";
import CAR_4 from "../assets/images/CaribbeanCruise/CAR_4.svg";
import CAR_5 from "../assets/images/CaribbeanCruise/CAR_5.svg";
import CAR_6 from "../assets/images/CaribbeanCruise/CAR_6.svg";
import lordOfTheRing from "../assets/images/MiddleEarth/lord-of-the-rings.svg";
import LORD_1 from "../assets/images/MiddleEarth/LORD_1.svg";
import LORD_2 from "../assets/images/MiddleEarth/LORD_2.svg";
import LORD_3 from "../assets/images/MiddleEarth/LORD_3.svg";
import LORD_4 from "../assets/images/MiddleEarth/LORD_4.svg";
import LORD_5 from "../assets/images/MiddleEarth/LORD_5.svg";
import LORD_6 from "../assets/images/MiddleEarth/LORD_6.svg";
import galaxie from "../assets/images/StarWars/galaxie.svg";
import GAL_1 from "../assets/images/StarWars/GAL_1.svg";
import GAL_2 from "../assets/images/StarWars/GAL_2.svg";
import GAL_3 from "../assets/images/StarWars/GAL_3.svg";
import GAL_4 from "../assets/images/StarWars/GAL_4.svg";
import GAL_5 from "../assets/images/StarWars/GAL_5.svg";
import GAL_6 from "../assets/images/StarWars/GAL_6.svg";
import avatar from "../assets/images/Pandora/avatar_3.svg";
import AV_1 from "../assets/images/Pandora/AV_1.svg";
import AV_2 from "../assets/images/Pandora/AV_2.svg";
import AV_3 from "../assets/images/Pandora/AV_3.svg";
import AV_4 from "../assets/images/Pandora/AV_4.svg";
import AV_5 from "../assets/images/Pandora/AV_5.svg";
import AV_6 from "../assets/images/Pandora/AV_6.svg";

function Homepage() {
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function getDataLoad() {
      let data = await getAPIData();
      const API = [
        {
          cardImage1:GAL_1,
          cardImage2:GAL_2,
          cardImage3:GAL_3,
          cardImage4:GAL_4,
          cardImage5:GAL_5,
          cardImage6:GAL_6,
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
          cardImage1:LORD_1,
          cardImage2:LORD_2,
          cardImage3:LORD_3,
          cardImage4:LORD_4,
          cardImage5:LORD_5,
          cardImage6:LORD_6,
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
          cardImage1:AV_1,
          cardImage2:AV_2,
          cardImage3:AV_3,
          cardImage4:AV_4,
          cardImage5:AV_5,
          cardImage6:AV_6,
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
          cardImage1:CAR_1,
          cardImage2:CAR_2,
          cardImage3:CAR_3,
          cardImage4:CAR_4,
          cardImage5:CAR_5,
          cardImage6:CAR_6,
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
          cardImage1:HP_1,
          cardImage2:HP_2,
          cardImage3:HP_3,
          cardImage4:HP_4,
          cardImage5:HP_5,
          cardImage6:HP_6,
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
        <Link to={`${itemCard.path}`} key={index}>
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
        </Link>
      ))}
    </div>
  );
}

export default Homepage;
