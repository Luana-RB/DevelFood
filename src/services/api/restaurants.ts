import {api} from './api';
import {restaurantsMock} from '../../mocks/restaurants';
import {useToken} from '../context/tokenContext';

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
    console.log('get', e);
  }
}
export async function getRestaurantsFiltered({page, filter}: GetFilterProps) {
  try {
    // const restaurants = await api.get(
    //   `/restaurante/listar?nome=${filter}&page=${page}`,
    // );
    // return restaurants.data.content;
    const restaurants = restaurantsMock;
    const newData = restaurants?.filter((item: {nome: string}) => {
      const name = item.nome.toUpperCase();
      const text = filter.toUpperCase();
      return name.indexOf(text) > -1;
    });
    return newData;
  } catch (e) {
    console.log(e);
  }
}

export async function getRestaurantById(id: string) {
  try {
    // const restaurants = await api.get(`/restaurante/listar?id=${id}`);
    // return restaurants.data.content;
    const restaurants = restaurantsMock;
    const newData = restaurants?.filter((item: {id: string}) => {
      const name = item.id.toUpperCase();
      const text = id.toUpperCase();
      return name.indexOf(text) > -1;
    });
    return newData[0];
  } catch (e) {
    console.log(e);
  }
}
