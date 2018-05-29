import axios from "axios";

export const FETCH_WEATHER = "fetch_weather";

const API_KEY = "&appid=b8cb883613842c36ce2118a24097f158";
const rootUrl = `https://api.openweathermap.org/data/2.5/forecast`;

export function fetchWeather(city) {
  const url = `${rootUrl}?q=${city}${API_KEY}`;
  const request = axios.get(url);
  
  //return the action
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
