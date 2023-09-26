import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchFromAPI = async (query: string) => {
  const { data } = await axios.get(`${BASE_URL}?q=${query}&appid=${API_KEY}`);

  return data;
};
