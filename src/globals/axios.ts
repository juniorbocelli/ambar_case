import axios from 'axios';

export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const apiAxios = axios.create({baseURL: BASE_URL});

export default apiAxios;