import {restaurantsMock} from '../../mocks/restaurants';
import {api, getToken} from './api';

export async function getPlateDataById(id: string) {
  try {
    // const header = await getToken();
    // const plateData = await api.get(`/plates/${id}`, header);
    const restaurantArray = restaurantsMock;
    for (let i = 0; i < restaurantArray.length; i++) {
      const restaurant = restaurantArray[i];
      let lenght = 0;
      if (restaurant.plates?.length) lenght = restaurant.plates?.length;

      for (let index = 0; index < lenght; i++) {
        if (restaurant.plates && restaurant.plates[index].id === id)
          return restaurant.plates[index];
      }
    }
    return undefined;
  } catch (e) {
    console.log(e);
  }
}
