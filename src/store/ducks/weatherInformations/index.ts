import { Reducer } from 'redux';

import {
  IWeatherInformationsState,
  WeatherInformationsTypes,
  IWeatherInformations,
} from './types';

const INITIAL_STATE: IWeatherInformationsState = {
  data: [],
  error: {
    hasError: false,
    errorMessage: '',
  },
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
      let newData: Array<IWeatherInformations>;

      if (typeof (state.data) !== "undefined") {
        newData = state.data.filter((value: IWeatherInformations) => {
          return action.payload.data.name !== value.name;
        });

        newData.push(action.payload.data);
      } else {
        newData = state.data;
      }

      return {
        ...state,
        loading: false,
        error: {
          hasError: false,
          errorMessage: '',
        },
        data: newData,
      }

    case WeatherInformationsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          hasError: true,
          errorMessage: action.payload.errorMesage,
        },
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

