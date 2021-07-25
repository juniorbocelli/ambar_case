import { database } from '../features/firebase';
import { IWeatherInformations } from '../store/ducks/weatherInformations/types';

const putWeatherLogFirebaseAPI = (data: IWeatherInformations) => {
  const logtRef = database.ref('log');
  const newEntryRef = logtRef.push();

  newEntryRef.set({
    city: data.name,
    temp_min: data.temp_min,
    temp_max: data.temp_max,
  });
}

export default putWeatherLogFirebaseAPI;