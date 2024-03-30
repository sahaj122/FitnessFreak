import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const getFoodData = async (data) => {
  try {
    // getting food item
    const query = data.toString().replace(/"/g, "");

    // if form is empty
    if (query.length == 0) {
      return; 
    }

    // final endpoint
    const FINAL_ENDPOINT = API_ENDPOINT + query;

    // fetching data to api
    const response = await axios.get(FINAL_ENDPOINT, {
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
