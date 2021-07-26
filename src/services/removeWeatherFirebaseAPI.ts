import { database } from '../features/firebase';

const removeWeatherFirebaseAPI = () => {
  database.ref('current_temp/').set(null);
}

export default removeWeatherFirebaseAPI;