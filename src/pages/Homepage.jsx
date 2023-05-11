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
          title6:"Tatooine",
          destination6:"Experience the desert planet's rugged charm, encounter fascinating species, and visit iconic locations from the Star Wars saga",
          title5:"Naboo",
          destination5:"Marvel at the regal beauty of this planet, with its elegant architecture, vibrant culture, and picturesque landscapes.",
          title4:"Endor",
          destination4:"Immerse yourself in the lush forests and encounter the adorable Ewoks, inhabitants of this enchanting moon.",
          title3:"Death Star",
          destination3:"Uncover the immense power and intrigue of this iconic space station, a symbol of galactic dominance.",
          guide_name:"Jar Jar Binks",
          guide_description:"Join the charming and quirky Jar Jar Binks as your knowledgeable guide, who brings a touch of humor and unique insights to your fantastical explorations.",
          title2:"Star Destroyer",
          transport2:"Experience the grandeur and power of a Star Destroyer, an imposing and formidable spacecraft that commands respect and strikes fear into the hearts of enemies.",
          title1:"The Millennium Falcon",
          transport1:"A legendary spacecraft that navigates the galaxy with speed and agility.",
          description:"Embark on an otherworldly adventure to a realm steeped in legends and intergalactic wonders. Travel aboard spaceships, guided by the endearing Jar Jar Binks, as you traverse a universe of limitless possibilities",
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
          
          title6:"Rivendell",
          destination6:"Seek refuge in the tranquil sanctuary of Rivendell, an elven haven surrounded by serene beauty and wisdom.",
          title5:"The Moria",
          destination5:"Venture into the depths of this ancient underground city, where ancient treasures and perilous encounters await.",
          title4:"Helm's Deep",
          destination4:"Witness the might and grandeur of the ancient fortress, known for its epic battles and valiant stands against evil forces.",
          title3:"The Counter",
          destination3:"Discover this mysterious and elusive location, shrouded in myth and legends, where fate and destiny intertwine.",
          guide_name:"Gollum",
          guide_description:"Follow the enigmatic and complex Gollum as your guide, unraveling the secrets and hidden paths of Middle Earth with his eerie knowledge",
          title2:"Horse",
          transport2:"Traverse Middle Earth in the traditional and noble way, forging bonds with these loyal and reliable companions.",
          title1:"Gwaihir",
          transport1:"Soar through the skies on the mighty wings of Gwaihir, a majestic eagle providing a majestic and awe-inspiring mode of travel.",
          description:"Enter a realm of enchantment and heroic quests, where majestic creatures will aid your journey. Guided by the enigmatic Gollum, explore fabled locations and immerse yourself in the rich tapestry of Middle Earth.",
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
          title6:"Cove of the Ancestors",
          destination6:"Journey to this sacred place, where the spirits of the Na'vi ancestors dwell, offering tranquility and spiritual enlightenment",
          title5:"Three Brothers Rocks",
          destination5:"Discover the mystique and natural beauty of the Three Brothers Rocks, steeped in myth and legend.",
          title4:"RDA Camp",
          destination4:"Witness the clash of cultures as you visit the human-operated Research Development Administration Camp",
          title3: "Hometree",
          destination3: "Explore the colossal and sacred Hometree, a thriving ecosystem and the heart of Na'vi society.",
          guide_name:"Neytiri",
          guide_description:"Follow the wise and skilled Neytiri as your guide, immersing yourself in the rich Na'vi culture and the ecological marvels of Pandora.",
          title2: "Dragon Assault Ship",
          transport2: "C-21 Dragon Assault Ship: Experience an exhilarating adventure aboard the C-21 Dragon Assault Ship, offering speed and agility through Pandora's skies.",
          title1: "Ikran",
          transport1: "Mount the graceful Ikran, a winged creature, and soar through the lush landscapes, taking in the awe-inspiring beauty from above.",
          description: "Immerse yourself in the breathtaking beauty of Pandora, a vibrant and alien world. Ride upon the majestic Ikran and C-21 Dragon Assault Ship, guided by the wise Neytiri, as you discover the wonders of this mesmerizing realm.",
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
          title6:"Tortuga Island",
          destination6:"Immerse yourself in the vibrant and lively atmosphere of Tortuga Island, where pirates once roamed and treasures await to be discovered.",
          title5:"Port Royal",
          destination5:"Step into the bustling port town of Port Royal, a hub of commerce and adventure, filled with charming streets and historic landmarks.",
          title4:"Rum Island",
          destination4:"Indulge in the tropical paradise of Rum Island, where pristine beaches, crystal-clear waters, and refreshing beverages create the perfect setting for relaxation and enjoyment.",
          title3:"Isla de la Muerta",
          destination3:"Uncover the secrets of the mysterious Isla de la Muerta, an island shrouded in legends and ancient curses, offering an intriguing and thrilling experience for the adventurous traveler.",
          guide_name:"Calypso",
          guide_description:"The enigmatic guide, shares tales of pirate lore and the secrets of the Caribbean waters",
          title2:"Flying Dutchman",
          transport2:"A spectral vessel navigating the realms between life and death",
          title1:"Black Pearl",
          transport1:"Set sail on the infamous Black Pearl, a pirate ship steeped in legend and known for its swiftness and cunning",
          description:"Set sail on a thrilling Caribbean cruise aboard the legendary ships. Let the mythical Calypso be your guide as you explore the mysteries and delights of the Caribbean",
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
          title6:"Diagon Alley",
          destination6:"Immerse yourself in the bustling hub of wizarding commerce, where shops brim with magical wonders and enchantment awaits at every corner",
          title5:"Malfoy Manor",
          destination5:"Delve into the secrets of this imposing residence, a hub of intrigue and mystery in the wizarding world",
          title4:"The Burrow",
          destination4:"Experience the cozy charm of the Weasley family home, filled with love, laughter, and enchanting surprises",
          title3:"Hogwarts",
          destination3:"Unleash your inner wizard as you attend classes and explore the iconic castle, where magical adventures await",
          guide_name:"Dobby",
          guide_description:"Let the loyal and devoted Dobby, the endearing house-elf, show you the secrets and wonders of this enchanting world",
          title2:"Floo powder",
          transport2:"Traverse through fireplaces using Floo powder",
          title1:"Nimbus 2000",
          transport1:"Glide through the skies on a broomstick",
          description:"Step into the magical realm of wizards and witches, where transportation comes in the form of broomstick and Floo powder. Accompanied by the loyal Dobby, embark on enchanting adventures in the world of magic",
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
