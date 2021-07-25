import { action } from 'typesafe-actions';

import {
    WeatherInformationsTypes,
    IWeatherInformations,
    SelectedCity,
} from './types';

export const loadRequest = (city: SelectedCity) => action(WeatherInformationsTypes.LOAD_REQUEST, city);
export const loadSuccess = (data: IWeatherInformations) => action(WeatherInformationsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(WeatherInformationsTypes.LOAD_FAILURE);

export const loadUpdate = (data: Array<IWeatherInformations>) => action(WeatherInformationsTypes.LOAD_UPDATE, data);
