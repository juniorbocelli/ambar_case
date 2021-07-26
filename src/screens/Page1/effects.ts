import React from 'react';

import { IPage1Props } from './types';
import { IWeatherInformations } from '../../store/ducks/weatherInformations/types';

import { database } from '../../features/firebase';
import removeWeatherFirebaseAPI from '../../services/removeWeatherFirebaseAPI';

export interface IUseEffects {
  useComponentDidMount: (props: IPage1Props) => void;
}

export default function useEffects(): IUseEffects {

  const currentWeatherWatchdog = (props: IPage1Props) => {
    const {
      loadUpdate,
    } = props;

    const currentTempRef = database.ref('current_temp');

    currentTempRef.on('value', (snapshot: any) => {
      let data = snapshot.val();
      let arrayData: Array<IWeatherInformations> = [];
      console.log('currentTempData', data);


      // Já que os dados no Firebase (Real Time) são gravados como documentos JSON, é 
      // necessário converter a saída para o formato de dados definido no Redux.
      if (data !== null) {
        Object.keys(data).forEach((value, key) => {
          let line: IWeatherInformations;
          console.log(value, key);
  
          line = {
            name: value,
            temp: data[value].temp,
            temp_min: data[value].temp_min,
            temp_max: data[value].temp_max,
            date: data[value].date,
            icon: data[value].icon,
          }
  
          console.log('line', line)

          arrayData.push(line);
  
        });

        console.log('arrayData', arrayData);

        loadUpdate(arrayData);
      }
    });
  }

  const useComponentDidMount = (props: IPage1Props) => {
    const {
      weatherInformations,
    } = props;

    React.useEffect(() => {
      // Remove os dados correntes quando o aplicativo é iniciado
      if (weatherInformations.length === 0) removeWeatherFirebaseAPI();
  
      // Aciona motiromanento de dados do Firebase e manda atualização para o Redux-Saga
      // atualizar o estado, quando necessário.
      currentWeatherWatchdog(props);
    }, []);
  }

  return {
    useComponentDidMount,
  }
}