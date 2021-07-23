export type IsQueryingAPIState = boolean;
export type HasErrorMessageState = boolean;
export type ErrorMessageState = string;

export type SelectedCityState = undefined | string;
export type CityInfoState = {
    name: string;
    temp: string;
    temp_min: string;
    temp_max: string;
    icon: string;
    date: string;
}