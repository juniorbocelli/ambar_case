import { ADD_NEW_CITY_INFO } from './actionsTypes';
import { NewCityInfo } from '../reducers/addNewCity';

export const addNewCity = (value: Array<NewCityInfo>) => ({
  type: ADD_NEW_CITY_INFO,
  newCityArray: value
});