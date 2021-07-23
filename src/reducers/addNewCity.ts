import { ADD_NEW_CITY_INFO } from '../actions/actionsTypes';

const initialState = {
  newCityArray: []
};

export type NewCityInfo = {
    cityName: string;
    temp_min: number;
    temp_max: number,
}

export type Action = {
    type: string;
    payload: {
      newCityArray: Array<NewCityInfo>
    }
}

export const addNewCity = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_NEW_CITY_INFO:
      return {
        ...state,
        newCityArray: action.payload.newCityArray
      };

    default:
      return state;
  }
};