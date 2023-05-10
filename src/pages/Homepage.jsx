import React, { useState, useEffect } from "react";
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
    </div>
  );
}

export default Homepage;
