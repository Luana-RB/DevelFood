import {plates} from '../../mocks/plates';
import {api, getToken} from './api';

export async function getPlateDataById(id: string) {
  try {
    // const header = await getToken();
    // const plateData = await api.get(`/plates/${id}`, header);

    const platesArray = plates;
    const plateData = platesArray.find(plate => plate.id === id);
    if (plateData) return plateData;
  } catch (e) {
    console.log(e);
  }
}
