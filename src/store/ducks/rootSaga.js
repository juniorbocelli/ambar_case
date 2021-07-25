import {
    all,
    takeLatest,
} from 'redux-saga/effects';

import { WeatherInformationsTypes } from './weatherInformations/types';

import { load } from './weatherInformations/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(WeatherInformationsTypes.LOAD_REQUEST, load),
    ]);
}