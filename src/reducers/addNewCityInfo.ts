import { ADD_NEW_CITY_INFO } from '../actions/actionsTypes';

const initialState = {
  newValue: []
};

export type NewCityInfo = {
    cityName: string;
    temp_min: number;
    temp_max: number,
}

export type Action = {
    type: string;
    payload: {
        newValue: Array<NewCityInfo>
    }
}

export const addNewCityInfo = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_NEW_CITY_INFO:
      return {
        ...state,
        newValue: action.payload.newValue
      };

    default:
      return state;
  }
};