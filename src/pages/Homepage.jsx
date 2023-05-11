import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAPIData from "../API/FetchData";

function Homepage() {
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
      Coucou tout le monde ! Avec des bisous bien sûr !
      {dataAPI.map((data) => (
        <li key={data.name}>{data.name}</li>
      ))}

      <Link to="/">Home</Link>
      <Link to="/CGU">CGUPage</Link>
      <Link to="/caribbean-cruise">caribbean-cruise</Link>
      <Link to="/wisard">Wisard</Link>
      <Link to="/star-wars">star-wars</Link>
      <Link to="/pandora">pandora</Link>
      <Link to="/middle-earth">MiddleEarth</Link>


    </div>
  );
}

export default Homepage;
