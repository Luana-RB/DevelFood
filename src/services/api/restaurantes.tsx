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
    // const restaurants = await api.get(`/restaurante/listar?page=${page}`);
    // return restaurants.data.content;
    const restaurants = restaurantsMock.slice(page, page + 7);
    return restaurants;
  } catch (e) {
    console.log(e);
  }
}

export async function getRestaurantsByCategory({page, filter}: GetFilterProps) {
  try {
    const restaurants = await api.get(
      `/restaurante/listar?page=${page}&filtro${filter}`,
    );
    return restaurants.data.content;
  } catch (e) {
    console.log(e);
  }
}
