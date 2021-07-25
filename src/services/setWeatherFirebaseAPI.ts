import { database } from '../features/firebase';
import { IWeatherInformations } from '../store/ducks/weatherInformations/types';

const setWeatherFirebaseAPI = (data: IWeatherInformations) => {
  database.ref('current_temp/' + data.name).set({
    temp_min: data.temp_min,
    tem_max: data.temp_max,
  });
}

export default setWeatherFirebaseAPI;