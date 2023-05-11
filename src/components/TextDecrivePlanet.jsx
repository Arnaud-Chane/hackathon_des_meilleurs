import React, { useState, useEffect } from "react";
import stars from "../assets/images/stars.svg";

function TextDecrivePlanet() {
  const [dataWorld, setDataWorld] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataWorld"));
    if (data) {
      setDataWorld(...data);
    }
  }, []);

  const ecriture = function (lettre, nombre) {
    if (nombre < lettre.length) {
      setTimeout(() => {
        setDescription((prevDesc) => prevDesc + lettre[nombre]);
        ecriture(lettre, nombre + 1);
      }, 20);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      ecriture(dataWorld.description, 0);
    }, 1000);
  }, [dataWorld.description]);

  return (
    <div className="textDecrivePlanet">
      <img src={stars} alt="image stars evaluation" />
      <p className="textDecrivePlanetParagraphe">{description}</p>
    </div>
  );
}
export default TextDecrivePlanet;
