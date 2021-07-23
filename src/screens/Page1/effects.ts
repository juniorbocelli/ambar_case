import React from "react";

import { IUseAPIs } from './apis';
import { IUseStates } from './states';
import { IPage1Props } from './index';
import { NewCityInfo } from '../../reducers/addNewCity';

interface IUseChangeCityInfoProps extends IPage1Props {
  states: IUseStates;
}

export interface IUseEffects {
  useComponentDidMount: () => void;
  useChangeSelectedCity: (states: IUseStates) => void;
  useChangeCityInfo: (props: IUseChangeCityInfoProps) => void;
}

export default function useEffects(apis: IUseAPIs): IUseEffects {
  const useComponentDidMount = () => {
    React.useEffect(() => {
      // Adiciona efeino de monitorar Firebase
      apis.watchdogCurrentTempFirebase();
      
    }, []);
  };

  const useChangeSelectedCity = (states: IUseStates) => {
    const {
      selectedCity,
    } = states;

    React.useEffect(() => {
      // Simplesmente consulta a api para buscar dados da cidade
      if (selectedCity !== undefined) apis.fetchCityWheaterInfo();
  
    }, [selectedCity]);
  }

  const useChangeCityInfo = (props: IUseChangeCityInfoProps) => {
    const {
      states,
      newCityArray,
      addNewCity,
    } = props;

    const {
      cityInfo,
    } = states;

    React.useEffect(() => {
      let arrayToInsert: Array<NewCityInfo> = newCityArray;
  
      // Salva medição no log
      apis.insertTempInLogFirebase();
  
      // Para evitarmos inserção de cidades repetidas temos que determinar o valor do comprimento máximo
      // do vetor igual a 3. Essa verificação é desnecessária do ponto de vista lógico (pois a segunda verificação 
      // bastaria) porém, ela evita percorrer o vetor toda vez, tornando o processamento mais rápido
      if (newCityArray.length >= 3) return;
  
      // Também temos que determinar se determinada cidade já está inserida, pois o usuário pode selecionar uma cidade,
      // selecionar outra e voltar para a primeira seleção
      if (arrayToInsert.filter((item: NewCityInfo) => { return item.cityName === cityInfo.name }).length !== 0) return;
  
      // Evita adicionar quando monta o componente
      if (cityInfo.name !== '' && cityInfo.temp_min !== '' && cityInfo.temp_max !== '') {
        arrayToInsert.push({
          cityName: cityInfo.name,
          temp_min: cityInfo.temp_min,
          temp_max: cityInfo.temp_max,
        });
  
        // Atualiza a Store
        addNewCity(arrayToInsert);
  
        // Salva no Firebase
        apis.updateOrInsertCurrentTempInFirebase();
      }
  
      console.log(props);
    }, [cityInfo]);
  };

  return {
    useComponentDidMount,
    useChangeSelectedCity,
    useChangeCityInfo,
  };
}