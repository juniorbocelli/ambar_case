import { Reducer } from 'redux';

import {
  IWeatherInformationsState,
  WeatherInformationsTypes,
  IWeatherInformations,
} from './types';

const INITIAL_STATE: IWeatherInformationsState = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<IWeatherInformationsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherInformationsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case WeatherInformationsTypes.LOAD_SUCCESS:
      let newData = state.data.filter((value: IWeatherInformations) => {
        return action.payload.name !== value.name;
      });

      newData.push(action.payload.data);

      return {
        ...state,
        loading: false,
        error: false,
        data: newData,
      }

    case WeatherInformationsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      }

    case WeatherInformationsTypes.LOAD_UPDATE:
      return {
        ...state,
        data: action.payload.data,
      }

    default:
      return state;
  };
};

export default reducer;

