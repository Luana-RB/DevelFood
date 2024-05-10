import {api, getToken} from './api';

export async function getRestaurants(page: number) {
  try {
    const header = await getToken();
    const restaurants = await api.get(
      `/restaurante/listar?page=${page}`,
      header,
    );
    return restaurants.data.content;
  } catch (e) {
    console.log('getAllRestaurants:', e);
  }
}
export async function getRestaurantsFiltered(page: number, filter: string) {
  try {
    const header = await getToken();
    const restaurants = await api.get(
      `/restaurante/listar?nome=${filter}&page=${page}`,
      header,
    );
    return restaurants.data.content;
  } catch (e) {
    console.log('getFilteredRestaurants:', e);
  }
}

export async function getRestaurantById(id: string) {
  try {
    const header = await getToken();
    const restaurants = await api.get(`/restaurante/buscar/${id}`, header);
    return restaurants.data;
  } catch (e) {
    console.log(id, 'getIdRestaurants:', e);
  }
}
