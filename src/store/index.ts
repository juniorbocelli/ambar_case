import { createStore, Store } from 'redux';

import rootReducer from './ducks/rootReducer';
import { IWeatherInformationsState } from './ducks/weatherInformations/types';

export interface IApplicationsState {
  weatherInformations: IWeatherInformationsState;
}

const store: Store<IApplicationsState> = createStore(rootReducer);

export default store;