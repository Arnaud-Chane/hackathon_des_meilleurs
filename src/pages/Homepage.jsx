import React, { useState, useEffect } from "react";
import getAPIData from "../API/FetchData";
import CardSocle from "../components/CardSocle";

function Homepage() {
  const transformCard = [
    "rotate3d(2, -8, -1, 50deg) scale(1) matrix(2, 0, 0, 1, 45, 35)",
    "rotate3d(2, -8, -1, 30deg) scale(1.1) matrix(1.5, 0, 0, 1, 10, 0)",
    "rotate3d(0, 0, 0, 0deg) scale(1.2) scaleX(1.5)",
    "rotate3d(2, 8, 1, 30deg) scale(1.1)  matrix(1.5, 0, 0, 1, -10, 0)",
    "rotate3d(1, 10, 1, 50deg) scale(1) matrix(2, 0, 0, 1, -45, 35)"
  ];

  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function getDataLoad() {
      const data = await getAPIData();
      setDataAPI(data);
    }
    getDataLoad();
  }, []);

  return (
    <div className="Homepage">
      {transformCard.map((itemCard, index) => (
        <CardSocle transform={itemCard} key={index} />
      ))}
    </div>
  );
}

export default Homepage;
