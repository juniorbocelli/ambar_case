import React from 'react';

import {
  IsQueryingAPIState,
  HasErrorMessageState,
  ErrorMessageState,
} from './types';

export interface IUseStates {
  // Sistema
  isQueryingAPI: IsQueryingAPIState;
  setIsQueryingAPI: React.Dispatch<React.SetStateAction<IsQueryingAPIState>>;
  hasErrorMessage: HasErrorMessageState;
  setHasErrorMessage: React.Dispatch<React.SetStateAction<HasErrorMessageState>>;
  errorMessage: ErrorMessageState;
  setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessageState>>;
}

export default function useStates(): IUseStates {
  // Sistema
  const [isQueryingAPI, setIsQueryingAPI] = React.useState<IsQueryingAPIState>(false);
  const [hasErrorMessage, setHasErrorMessage] = React.useState<HasErrorMessageState>(false);
  const [errorMessage, setErrorMessage] = React.useState<ErrorMessageState>('');

  return {
    // Sistema
    isQueryingAPI: isQueryingAPI,
    setIsQueryingAPI: setIsQueryingAPI,
    hasErrorMessage: hasErrorMessage,
    setHasErrorMessage: setHasErrorMessage,
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage,
  }
}