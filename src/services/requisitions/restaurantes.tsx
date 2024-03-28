import {api} from '../api/api';

export async function getRestaurants() {
  try {
    const restaurantes = await api.get('/restaurante/listar');
    console.log(restaurantes.data.content);
    return restaurantes.data.content;
  } catch (e) {
    console.log(e);
  }
}
