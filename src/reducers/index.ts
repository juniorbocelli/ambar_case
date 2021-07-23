import { combineReducers } from 'redux';

import { addNewCity } from './addNewCity';

export const Reducers = combineReducers({
  newCityInfoState: addNewCity,
});