import { action } from 'typesafe-actions';

import {
    WeatherInformationsTypes,
    IWeatherInformations,
    SelectedCity,
    ErrorMessage,
} from './types';

export const loadRequest = (city: SelectedCity) => action(WeatherInformationsTypes.LOAD_REQUEST, city);
export const loadSuccess = (data: IWeatherInformations) => action(WeatherInformationsTypes.LOAD_SUCCESS, { data });
export const loadFailure = (errorMesage: ErrorMessage) => action(WeatherInformationsTypes.LOAD_FAILURE, { errorMesage });

export const updateRequest = (data: Array<IWeatherInformations>) => action(WeatherInformationsTypes.LOAD_UPDATE,  { data });

export const changeErrorEntry = () => action(WeatherInformationsTypes.CHANGE_ERROR_ENTRY);
