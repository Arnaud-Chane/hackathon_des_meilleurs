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
import nimbus from "../assets/images/Wizard/nimbus.svg";
import cheminette from "../assets/images/Wizard/cheminette.svg";
import malefoy from "../assets/images/Wizard/malefoy.svg";
import dobby from "../assets/images/Wizard/dobby.svg";
import poudlard from "../assets/images/Wizard/poudlard.svg";
import weasley from "../assets/images/Wizard/weasley.svg";
import pre_au_lard from "../assets/images/Wizard/pré_au_lard.svg";
import caribbean from "../assets/images/CaribbeanCruise/Caribbean.svg";
import calypso from "../assets/images/CaribbeanCruise/Calypso.svg";
import CAR_1 from "../assets/images/CaribbeanCruise/CAR_1.svg";
import CAR_2 from "../assets/images/CaribbeanCruise/CAR_2.svg";
import CAR_3 from "../assets/images/CaribbeanCruise/CAR_3.svg";
import CAR_4 from "../assets/images/CaribbeanCruise/CAR_4.svg";
import CAR_5 from "../assets/images/CaribbeanCruise/CAR_5.svg";
import CAR_6 from "../assets/images/CaribbeanCruise/CAR_6.svg";
import black_pearl from "../assets/images/CaribbeanCruise/Black_Pearl.svg";
import flying_dutchman from "../assets/images/CaribbeanCruise/Flying_Dutchman.svg";
import Rumisland from "../assets/images/CaribbeanCruise/Rum-island.svg";
import tortugaisland from "../assets/images/CaribbeanCruise/tortuga-island.svg";
import portroyale from "../assets/images/CaribbeanCruise/portroyale.svg";
import IslaDeMuertaPirates from "../assets/images/CaribbeanCruise/Isla_De_Muerta-Pirates.svg";
import lordOfTheRing from "../assets/images/MiddleEarth/lord-of-the-rings.svg";
import LORD_1 from "../assets/images/MiddleEarth/LORD_1.svg";
import LORD_2 from "../assets/images/MiddleEarth/LORD_2.svg";
import LORD_3 from "../assets/images/MiddleEarth/LORD_3.svg";
import LORD_4 from "../assets/images/MiddleEarth/LORD_4.svg";
import LORD_5 from "../assets/images/MiddleEarth/LORD_5.svg";
import LORD_6 from "../assets/images/MiddleEarth/LORD_6.svg";
import horses from "../assets/images/MiddleEarth/horses.svg";
import TheMoria from "../assets/images/MiddleEarth/The Moria.svg";
import Gwaihir from "../assets/images/MiddleEarth/Gwaihir.svg";
import gollum from "../assets/images/MiddleEarth/gollum.svg";
import lordoftherings from "../assets/images/MiddleEarth/HelmsDeep.svg";
import maisonhobbit from "../assets/images/MiddleEarth/maison_hobbit.svg";
import Rivendell from "../assets/images/MiddleEarth/Rivendell.svg";
import galaxie from "../assets/images/StarWars/galaxie.svg";
import GAL_1 from "../assets/images/StarWars/GAL_1.svg";
import GAL_2 from "../assets/images/StarWars/GAL_2.svg";
import GAL_3 from "../assets/images/StarWars/GAL_3.svg";
import GAL_4 from "../assets/images/StarWars/GAL_4.svg";
import GAL_5 from "../assets/images/StarWars/GAL_5.svg";
import GAL_6 from "../assets/images/StarWars/GAL_6.svg";
import fauconmillenium from "../assets/images/StarWars/faucon-millenium.svg";
import destroyer from "../assets/images/StarWars/destroyer.svg";
import etoiledelamort from "../assets/images/StarWars/étoile_de_la_mort.svg";
import galaxies from "../assets/images/StarWars/village_ewok.svg";
import naboo from "../assets/images/StarWars/naboo.svg";
import Tatooine from "../assets/images/StarWars/tatooine.svg";
import jarjarbinks from "../assets/images/StarWars/jarjarbinks.svg";
import avatar from "../assets/images/Pandora/avatar_3.svg";
import AV_1 from "../assets/images/Pandora/AV_1.svg";
import AV_2 from "../assets/images/Pandora/AV_2.svg";
import AV_3 from "../assets/images/Pandora/AV_3.svg";
import AV_4 from "../assets/images/Pandora/AV_4.svg";
import AV_5 from "../assets/images/Pandora/AV_5.svg";
import AV_6 from "../assets/images/Pandora/AV_6.svg";
import Dragongunship from "../assets/images/Pandora/Dragongunship.svg";
import ikran from "../assets/images/Pandora/ikran.svg";
import montagnes from "../assets/images/Pandora/montagnes_avatar.svg";
import NEYTIRI from "../assets/images/Pandora/NEYTIRI.svg";
import capsule from "../assets/images/Pandora/capsule.svg";
import arbre from "../assets/images/Pandora/arbre.svg";
import avatar2 from "../assets/images/Pandora/avatar2-pandora-concept-art 1.svg";

function Homepage() {
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function getDataLoad() {
      let data = await getAPIData();
      const API = [
        {
          transport4: fauconmillenium,
          transport5: destroyer,
          cardImage7: etoiledelamort,
          cardImage8: galaxies,
          cardImage9: naboo,
          cardImage10: Tatooine,
          cardImage1: GAL_1,
          cardImage2: GAL_2,
          cardImage3: GAL_3,
          cardImage4: GAL_4,
          cardImage5: GAL_5,
          cardImage6: GAL_6,
          guideImg: jarjarbinks,
          title6: "Tatooine",
          destination6:
            "Experience the desert planet's rugged charm, encounter fascinating species, and visit iconic locations from the Star Wars saga",
          title5: "Naboo",
          destination5:
            "Marvel at the regal beauty of this planet, with its elegant architecture, vibrant culture, and picturesque landscapes.",
          title4: "Ewok Village",
          destination4:
            "Immerse yourself in the lush forests and encounter the adorable Ewoks, inhabitants of this enchanting moon.",
          title3: "Death Star",
          destination3:
            "Uncover the immense power and intrigue of this iconic space station, a symbol of galactic dominance.",
          guide_name: "Jar Jar Binks",
          guide_description:
            "Join the charming and quirky Jar Jar Binks as your knowledgeable guide, who brings a touch of humor and unique insights to your fantastical explorations.",
          title2: "Star Destroyer",
          transport2:
            "Experience the grandeur and power of a Star Destroyer, an imposing and formidable spacecraft that commands respect and strikes fear into the hearts of enemies.",
          title1: "The Millennium Falcon",
          transport1:
            "A legendary spacecraft that navigates the galaxy with speed and agility.",
          description:
            "Embark on an otherworldly adventure to a realm steeped in legends and intergalactic wonders. Travel aboard spaceships, guided by the endearing Jar Jar Binks, as you traverse a universe of limitless possibilities.",
          transform: "perspective(90px) rotateY(5deg)",
          image: galaxie,
          path: "Star-Wars",
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
          transport4: Gwaihir,
          transport5: horses,
          cardImage9: TheMoria,
          cardImage8: lordoftherings,
          cardImage7: maisonhobbit,
          cardImage10: Rivendell,
          cardImage1: LORD_1,
          cardImage2: LORD_2,
          cardImage3: LORD_3,
          cardImage4: LORD_4,
          cardImage5: LORD_5,
          cardImage6: LORD_6,
          guideImg: gollum,
          title6: "Rivendell",
          destination6:
            "Seek refuge in the tranquil sanctuary of Rivendell, an elven haven surrounded by serene beauty and wisdom.",
          title5: "The Moria",
          destination5:
            "Venture into the depths of this ancient underground city, where ancient treasures and perilous encounters await.",
          title4: "Helm's Deep",
          destination4:
            "Witness the might and grandeur of the ancient fortress, known for its epic battles and valiant stands against evil forces.",
          title3: "The Counter",
          destination3:
            "Discover this mysterious and elusive location, shrouded in myth and legends, where fate and destiny intertwine.",
          guide_name: "Gollum",
          guide_description:
            "Follow the enigmatic and complex Gollum as your guide, unraveling the secrets and hidden paths of Middle Earth with his eerie knowledge",
          title2: "Horse",
          transport2:
            "Traverse Middle Earth in the traditional and noble way, forging bonds with these loyal and reliable companions.",
          title1: "Gwaihir",
          transport1:
            "Soar through the skies on the mighty wings of Gwaihir, a majestic eagle providing a majestic and awe-inspiring mode of travel.",
          description:
            "Enter a realm of enchantment and heroic quests, where majestic creatures will aid your journey. Guided by the enigmatic Gollum, explore fabled locations and immerse yourself in the rich tapestry of Middle Earth.",
          transform: "perspective(90px) rotateY(3deg)",
          image: lordOfTheRing,
          path: "Middle-Earth",
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
          transport5: Dragongunship,
          transport4: ikran,
          cardImage10: montagnes,
          cardImage8: avatar2,
          cardImage9: capsule,
          cardImage7: arbre,
          cardImage1: AV_1,
          cardImage2: AV_2,
          cardImage3: AV_3,
          cardImage4: AV_4,
          cardImage5: AV_5,
          cardImage6: AV_6,
          guideImg: NEYTIRI,
          title6: "Cove of the Ancestors",
          destination6:
            "Journey to this sacred place, where the spirits of the Na'vi ancestors dwell, offering tranquility and spiritual enlightenment",
          title5: "Capsule",
          destination5:
            "Discover the mystique and natural beauty of the Three Brothers Rocks, steeped in myth and legend.",
          title4: "RDA Camp",
          destination4:
            "Witness the clash of cultures as you visit the human-operated Research Development Administration Camp",
          title3: "Hometree",
          destination3:
            "Explore the colossal and sacred Hometree, a thriving ecosystem and the heart of Na'vi society.",
          guide_name: "Neytiri",
          guide_description:
            "Follow the wise and skilled Neytiri as your guide, immersing yourself in the rich Na'vi culture and the ecological marvels of Pandora.",
          title2: "Dragon Assault Ship",
          transport2:
            "C-21 Dragon Assault Ship: Experience an exhilarating adventure aboard the C-21 Dragon Assault Ship, offering speed and agility through Pandora's skies.",
          title1: "Ikran",
          transport1:
            "Mount the graceful Ikran, a winged creature, and soar through the lush landscapes, taking in the awe-inspiring beauty from above.",
          description:
            "Immerse yourself in the breathtaking beauty of Pandora, a vibrant and alien world. Ride upon the majestic Ikran and C-21 Dragon Assault Ship, guided by the wise Neytiri, as you discover the wonders of this mesmerizing realm.",
          transform: "perspective(90px) rotateY(0deg)",
          image: avatar,
          path: "Pandora",
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
          transport4: black_pearl,
          transport5: flying_dutchman,
          cardImage8: Rumisland,
          cardImage10: tortugaisland,
          cardImage9: portroyale,
          cardImage7: IslaDeMuertaPirates,
          cardImage1: CAR_1,
          cardImage2: CAR_2,
          cardImage3: CAR_3,
          cardImage4: CAR_4,
          cardImage5: CAR_5,
          cardImage6: CAR_6,
          guideImg: calypso,
          title6: "Tortuga Island",
          destination6:
            "Immerse yourself in the vibrant and lively atmosphere of Tortuga Island, where pirates once roamed and treasures await to be discovered.",
          title5: "Port Royal",
          destination5:
            "Step into the bustling port town of Port Royal, a hub of commerce and adventure, filled with charming streets and historic landmarks.",
          title4: "Rum Island",
          destination4:
            "Indulge in the tropical paradise of Rum Island, where pristine beaches, crystal-clear waters, and refreshing beverages create the perfect setting for relaxation and enjoyment.",
          title3: "Isla de la Muerta",
          destination3:
            "Uncover the secrets of the mysterious Isla de la Muerta, an island shrouded in legends and ancient curses, offering an intriguing and thrilling experience for the adventurous traveler.",
          guide_name: "Calypso",
          guide_description:
            "The enigmatic guide, shares tales of pirate lore and the secrets of the Caribbean waters",
          title2: "Flying Dutchman",
          transport2:
            "A spectral vessel navigating the realms between life and death",
          title1: "Black Pearl",
          transport1:
            "Set sail on the infamous Black Pearl, a pirate ship steeped in legend and known for its swiftness and cunning",
          description:
            "Set sail on a thrilling Caribbean cruise aboard the legendary ships. Let the mythical Calypso be your guide as you explore the mysteries and delights of the Caribbean.",
          transform: "perspective(90px) rotateY(358deg)",
          image: caribbean,
          path: "Caribbean-Cruise",
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
          transport5: cheminette,
          transport4: nimbus,
          cardImage10: pre_au_lard,
          cardImage9: malefoy,
          cardImage8: weasley,
          cardImage7: poudlard,
          cardImage1: HP_1,
          cardImage2: HP_2,
          cardImage3: HP_3,
          cardImage4: HP_4,
          cardImage5: HP_5,
          cardImage6: HP_6,
          guideImg: dobby,
          title6: "Diagon Alley",
          destination6:
            "Immerse yourself in the bustling hub of wizarding commerce, where shops brim with magical wonders and enchantment awaits at every corner",
          title5: "Malfoy Manor",
          destination5:
            "Delve into the secrets of this imposing residence, a hub of intrigue and mystery in the wizarding world",
          title4: "The Burrow",
          destination4:
            "Experience the cozy charm of the Weasley family home, filled with love, laughter, and enchanting surprises",
          title3: "Hogwarts",
          destination3:
            "Unleash your inner wizard as you attend classes and explore the iconic castle, where magical adventures await",
          guide_name: "Dobby",
          guide_description:
            "Let the loyal and devoted Dobby, the endearing house-elf, show you the secrets and wonders of this enchanting world",
          title2: "Floo powder",
          transport2: "Traverse through fireplaces using Floo powder",
          title1: "Nimbus 2000",
          transport1: "Glide through the skies on a broomstick",
          description:
            "Step into the magical realm of wizards and witches, where transportation comes in the form of broomstick and Floo powder. Accompanied by the loyal Dobby, embark on enchanting adventures in the world of magic.",
          transform: "perspective(90px) rotateY(356deg)",
          image: dumbledore,
          path: "Wizard",
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
