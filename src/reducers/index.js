import { combineReducers } from 'redux';

import { addNewCityInfo } from './addNewCityInfo';

export const Reducers = combineReducers({
  newCityInfoState: addNewCityInfo,
});