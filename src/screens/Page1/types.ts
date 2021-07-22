export type IsQueryingAPIState = boolean;
export type HasErrorMessageState = boolean;
export type ErrorMessageState = string;

export type SelectedCityState = undefined | string;
export type CityInfoState = {
    name: string;
    temp: number;
    temp_min: number;
    temp_max: number;
    icon: string;
}