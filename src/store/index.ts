import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { IWeatherInformationsState } from './ducks/weatherInformations/types';

export interface IApplicationsState {
  weatherInformations: IWeatherInformationsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationsState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;