import fetchCityWheaterInfoAPI from './fetchCityWheaterInfoAPI';
import { API_KEY } from '../../../globals/configurations';
import { IUseStates } from '../states';
import * as Tools from '../../../features/tools';

export interface IUseAPIs {
  fetchCityWheaterInfo: () => void;
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

    fetchCityWheaterInfoAPI(selectedCity!, API_KEY).then((response) => {
      console.log(response);

      setCityInfo({
        name: response.data.name,
        temp: response.data.main.temp.toString().replace(".", ","),
        temp_min: response.data.main.temp_min.toString().replace(".", ","),
        temp_max: response.data.main.temp_max.toString().replace(".", ","),
        icon: response.data.weather[0].icon,
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

  return {
    fetchCityWheaterInfo,
  }
}