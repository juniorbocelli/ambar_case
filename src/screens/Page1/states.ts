import React from 'react';

import {
  SelectedCityState,
} from './types';

export interface IUseStates {
  selectedCity: SelectedCityState,
  setSelectedCity: React.Dispatch<React.SetStateAction<SelectedCityState>>;
}

export default function useStates(): IUseStates {
  const [selectedCity, setSelectedCity] = React.useState<SelectedCityState>(undefined);

  return {
    selectedCity: selectedCity,
    setSelectedCity: setSelectedCity,
  }
}