import { ADD_NEW_CITY_INFO } from './actionsTypes';
import { NewCityInfo } from '../reducers/addNewCityInfo';

export const addNewCity = (value: Array<NewCityInfo>) => ({
  type: ADD_NEW_CITY_INFO,
  newValue: value
});