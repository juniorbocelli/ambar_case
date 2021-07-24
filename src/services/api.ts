import axios from 'axios';

export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const api = axios.create({baseURL: BASE_URL});

export default api;