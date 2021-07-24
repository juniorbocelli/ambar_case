import { Reducer } from 'redux';

import { IWeatherInformationsState, WeatherInformationsTypes } from './types';

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
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.data],
      }

    case WeatherInformationsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      }

    default:
      return state;
  };
};

export default reducer;

