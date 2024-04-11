import {api} from './api';
import {restaurantsMock} from '../../mocks/restaurants';

interface GetProps {
  page: number;
}
interface GetFilterProps {
  page: number;
  filter: string;
}

export async function getRestaurants({page}: GetProps) {
  try {
    // const restaurants = await api.get(`/restaurante/pratos?page=${page}`);
    // return restaurants.data.content;
    const restaurants = restaurantsMock.slice(page, page + 7);
    return restaurants;
  } catch (e) {
    console.log(e);
  }
}
