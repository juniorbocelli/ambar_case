import api from './api';
import { API_FETCH_CITY_WEATHER_INFO } from '../globals/endpoints';
import { API_KEY_OPEN_WEATHER_MAP } from '../globals/configurations';
import { AxiosResponse } from 'axios';

export default function fetchCityWheaterInfoAPI(cityName: string) {
  return api.get(API_FETCH_CITY_WEATHER_INFO, {
    params: {
        q: cityName,
        appid: API_KEY_OPEN_WEATHER_MAP,
        lang: "pt_br",
        units: "metric"
      }
  });
}