import React from 'react';

import {
  IsQueryingAPIState,
  HasErrorMessageState,
  ErrorMessageState,
  SelectedCityState,
  CityInfoState,
} from './types';

export interface IUseStates {
  // Sistema
  isQueryingAPI: IsQueryingAPIState;
  setIsQueryingAPI: React.Dispatch<React.SetStateAction<IsQueryingAPIState>>;
  hasErrorMessage: HasErrorMessageState;
  setHasErrorMessage: React.Dispatch<React.SetStateAction<HasErrorMessageState>>;
  errorMessage: ErrorMessageState;
  setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessageState>>;

  selectedCity: SelectedCityState,
  setSelectedCity: React.Dispatch<React.SetStateAction<SelectedCityState>>;
  cityInfo: CityInfoState,
  setCityInfo: React.Dispatch<React.SetStateAction<CityInfoState>>;
}

export default function useStates(): IUseStates {
  // Sistema
  const [isQueryingAPI, setIsQueryingAPI] = React.useState<IsQueryingAPIState>(false);
  const [hasErrorMessage, setHasErrorMessage] = React.useState<HasErrorMessageState>(false);
  const [errorMessage, setErrorMessage] = React.useState<ErrorMessageState>('');

  const [selectedCity, setSelectedCity] = React.useState<SelectedCityState>(undefined);
  const [cityInfo, setCityInfo] = React.useState<CityInfoState>({
    name: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    icon: '',
    date: '',
  })

  return {
    // Sistema
    isQueryingAPI: isQueryingAPI,
    setIsQueryingAPI: setIsQueryingAPI,
    hasErrorMessage: hasErrorMessage,
    setHasErrorMessage: setHasErrorMessage,
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage,

    selectedCity: selectedCity,
    setSelectedCity: setSelectedCity,
    cityInfo: cityInfo,
    setCityInfo: setCityInfo,
  }
}