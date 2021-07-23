import axios from '../../../globals/axios';
import { API_FETCH_CITY_WEATHER_INFO } from '../../../globals/endpoints';

export default function fetchCityWheaterInfoAPI(cityName: string, apiKey: string) {
  return axios.get(API_FETCH_CITY_WEATHER_INFO, {
    params: {
        q: cityName,
        appid: apiKey,
        lang: "pt_br",
        units: "metric"
      }
  });
}