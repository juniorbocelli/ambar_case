import { action } from 'typesafe-actions';

import {
    WeatherInformationsTypes,
    IWeatherInformations,
    SelectedCity,
} from './types';

export const loadRequest = (selectedCity: SelectedCity) => action(WeatherInformationsTypes.LOAD_REQUEST, selectedCity);
export const loadSuccess = (data: IWeatherInformations) => action(WeatherInformationsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(WeatherInformationsTypes.LOAD_FAILURE);
