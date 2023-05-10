import axios from "axios";

const API_URL = "https://remotive.com/api/remote-jobs?limit=100";

const getAPIData = async () => {
  try {
    const dataAPI = await axios.get(`${API_URL}`);
    return dataAPI.data.jobs;
  } catch (error) {
    return error;
  }
};

export default getAPIData;
