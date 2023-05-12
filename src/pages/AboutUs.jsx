import React from "react";
import equipe from "../assets/images/equipe/Group_1.svg";

function AboutUs() {
  return <div className="about">
    <h2 className="title">About us</h2>
    <br></br>
    <p className="text">Chez Mystic Trips, nous croyons que chaque voyage est unique et mérite une attention particulière. Notre équipe expérimentée et dynamique est composée de conseillers en voyages passionnés, désireux de partager leur expertise et de créer des itinéraires sur mesure répondant à vos besoins et à vos préférences. Que vous soyez un voyageur solo en quête d'aventure, un couple en lune de miel ou une famille cherchant des vacances mémorables, nous nous engageons à vous fournir un service personnalisé et des conseils avisés pour faire de votre voyage une expérience extraordinaire.
    </p>
    <br></br>
    <h2 className="title">Team travel</h2>
    <br></br>
    <img className="imageGroup" src={equipe} alt="group"/>
    
  </div>;
}

export default AboutUs;
