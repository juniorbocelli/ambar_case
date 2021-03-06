import { IWeatherInformations } from '../../store/ducks/weatherInformations/types';

export interface IStateProps {
  weatherInformations: Array<IWeatherInformations>;
}

interface IDispatchProps {
  loadRequest(city: string): void;
  updateRequest(data: Array<IWeatherInformations>): void;
}

export type IPage2Props = IStateProps & IDispatchProps;