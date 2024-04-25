import {restaurantsMock} from '../../mocks/restaurants';
import {PlateData} from '../../types/restaurantData';
import {api, getToken} from './api';

export async function getPlateData(id: string): Promise<PlateData | undefined> {
  try {
    // const header = await getToken();
    // const plateData = await api.get(`/plates/${id}`, header);
    const restaurantArray = restaurantsMock;
    let plateData = null;
    restaurantArray.some(restaurant => {
      plateData = restaurant.plates?.find(plate => plate.id === id);
      return plateData;
    });
    if (plateData) return plateData;
  } catch (e) {
    console.log(e);
  }
}
