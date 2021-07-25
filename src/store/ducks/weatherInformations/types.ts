// Actions types
export enum WeatherInformationsTypes {
  LOAD_REQUEST = '@weather/LOAD_REQUEST',
  LOAD_SUCCESS = '@weather/LOAD_SUCCESS',
  LOAD_FAILURE = '@weather/LOAD_FAILURE',
  LOAD_UPDATE = '@weather/LOAD_UPDATE',
}

// Data Types
export interface IWeatherInformations {
  name: string;
  temp: string;
  temp_min: string;
  temp_max: string;
  date: string;
  icon: string;
}
export type SelectedCity = string;
export type ErrorMessage = string;

// State types
export interface IWeatherInformationsState {
  readonly data: Array<IWeatherInformations>;
  readonly loading: boolean;
  readonly error: {
    hasError: boolean;
    errorMessage: string;
  };
}