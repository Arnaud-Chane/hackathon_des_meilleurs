import axios from "axios";

const API_URL = "https://swapi.dev/api/planets/";

const getAPIData = async () => {
  try {
    const dataAPI = await axios.get(`${API_URL}`);
    return dataAPI.data.results;
  } catch (error) {
    return error;
  }
};

export default getAPIData;
