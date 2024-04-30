import {api, getToken} from './api';
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
    const header = await getToken();
    const restaurants = await api.get(`/api/restaurantes?page=${page}`, header);
    return restaurants.data.content;
    // const restaurants = restaurantsMock.slice(page, page + 7);
    // return restaurants;
  } catch (e) {
    console.log('getAllRestaurants:', e);
  }
}
export async function getRestaurantsFiltered({page, filter}: GetFilterProps) {
  try {
    const header = await getToken();
    const restaurants = await api.get(
      `/api/restaurantes?name=${filter}&page=${page}`,
      header,
    );
    return restaurants.data.content;
    // const restaurants = restaurantsMock;
    // const newData = restaurants?.filter((item: {name: string}) => {
    //   const name = item.name.toUpperCase();
    //   const text = filter.toUpperCase();
    //   return name.indexOf(text) > -1;
    // });
    // return newData;
  } catch (e) {
    console.log('getFilteredRestaurants:', e);
  }
}

export async function getRestaurantById(id: string) {
  try {
    const header = await getToken();
    const restaurants = await api.get(`/api/restaurantes/${id}`, header);
    console.log(restaurants.data);
    return restaurants.data;
    // const restaurants = restaurantsMock;
    // const newData = restaurants?.filter((item: {id: string}) => {
    //   const name = item.id.toUpperCase();
    //   const text = id.toUpperCase();
    //   return name.indexOf(text) > -1;
    // });
    // return newData[0];
  } catch (e) {
    console.log(id, 'getIdRestaurants:', e);
  }
}
