import { IWeatherInformations } from '../../store/ducks/weatherInformations/types';

// Tipos dos estados locais
export type SelectedCityState = undefined | string;

// Tipos e interface do componente principal
export interface IStateProps {
    weatherInformations: Array<IWeatherInformations>;
    isQueryingAPI: boolean;
    errorAPI: {
        hasError: boolean;
        errorMessage: string;
    }

}

export interface IDispatchProps {
    loadRequest(city: string): void;
    loadUpdate(data: Array<IWeatherInformations>): void;
}

export type IPage1Props = IStateProps & IDispatchProps;