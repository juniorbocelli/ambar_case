import fetchCityWheaterInfoAPI from './fetchCityWheaterInfoAPI';
import { API_KEY_OPEN_WEATHER_MAP } from '../../../globals/configurations';
import { IUseStates } from '../states';
import * as Tools from '../../../features/tools';

import { database } from '../../../features/firebase';

export interface IUseAPIs {
  fetchCityWheaterInfo: () => void;
  updateOrInsertCurrentTempInFirebase: () => void;
  insertTempInLogFirebase: () => void;
  watchdogCurrentTempFirebase: () => void;
}

export default function useAPIs(states: IUseStates): IUseAPIs {
  const fetchCityWheaterInfo = () => {
    const {
      setIsQueryingAPI,
      setHasErrorMessage,
      setErrorMessage,
      selectedCity,
      setCityInfo,
    } = states;

    setIsQueryingAPI(true);
    setHasErrorMessage(false);
    setErrorMessage('');

    fetchCityWheaterInfoAPI(selectedCity!, API_KEY_OPEN_WEATHER_MAP).then((response) => {
      console.log(response);

      setCityInfo({
        name: response.data.name,
        temp: response.data.main.temp.toString().replace(".", ","),
        temp_min: response.data.main.temp_min.toString().replace(".", ","),
        temp_max: response.data.main.temp_max.toString().replace(".", ","),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        date: Tools.printDateTimeFromTimestamp(new Date()),
      });

    }).catch(error => {
      console.error("ERRO:", "Ocorreu um erro ao buscar dados da previsão do tempo para a cidade!");

      if (typeof (error.response) !== "undefined")
        setErrorMessage(error.response.data.message);
      else
        setErrorMessage("Ocorreu um erro ao buscar dados da previsão do tempo para a cidade!");

      setHasErrorMessage(true);
    }).finally(() => {
      setIsQueryingAPI(false);
    });
  }

  const updateOrInsertCurrentTempInFirebase = () => {
    const {
      cityInfo,
    } = states;

    database.ref('current_temp/' + cityInfo.name).set({
      temp_min: cityInfo.temp_min,
      tem_max: cityInfo.temp_max,
    });
  }

  const insertTempInLogFirebase = () => {
    const logtRef = database.ref('log');
    const newEntryRef = logtRef.push();

    const {
      cityInfo,
    } = states;

    newEntryRef.set({
      city: cityInfo.name,
      temp_min: cityInfo.temp_min,
      temp_max: cityInfo.temp_max,
    });
  }

  const watchdogCurrentTempFirebase = () => {
    const currentTempRef = database.ref('current_temp');
    currentTempRef.on('value', (snapshot: any) => {
      const data = snapshot.val();
      console.log('currentTempData', data);
    });
  }

  return {
    fetchCityWheaterInfo,
    updateOrInsertCurrentTempInFirebase,
    insertTempInLogFirebase,
    watchdogCurrentTempFirebase,
  }
}