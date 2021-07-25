import {
  call,
  put,
  fork,
} from 'redux-saga/effects';

import fetchCityWheaterInfoAPI from '../../../services/fetchCityWheaterInfoAPI';
import setWeatherFirebaseAPI from '../../../services/setWeatherFirebaseAPI';
import putWeatherLogFirebaseAPI from '../../../services/putWeatherLogFirebaseAPI';

import {
  loadSuccess,
  loadFailure,
} from './actions';

import { printDateTimeFromTimestamp } from '../../../features/tools';

export function* load(dispatch) {
  try {
    let newItem;
    const response = yield call(fetchCityWheaterInfoAPI, dispatch.payload);

    newItem = {
      name: response.data.name,
      temp: response.data.main.temp.toString().replace(".", ","),
      temp_min: response.data.main.temp_min.toString().replace(".", ","),
      temp_max: response.data.main.temp_max.toString().replace(".", ","),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      date: printDateTimeFromTimestamp(new Date()),
    }

    console.log(new Date())

    yield put(loadSuccess(newItem));

  } catch (error) {
    console.error(error);

    yield put(loadFailure());
  }
}

export function* success(dispatch) {
  try {
    yield fork(setWeatherFirebaseAPI, dispatch.payload.data);
    yield fork(putWeatherLogFirebaseAPI, dispatch.payload.data);
  } catch (error) {
    console.error(error);
  }
}