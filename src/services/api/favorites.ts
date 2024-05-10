import {PlateData} from '../../types/restaurantData';
import {api, getToken} from './api';

export async function getFavoritePlates(page: number) {
  try {
    const header = await getToken();
    const favorite = await api.get(`/favorito/pratos?page=${page}`, header);
    return favorite.data.content;
  } catch (e) {
    console.log('get favorites ', e);
  }
}

export async function addFavoritePlate(plate: PlateData) {
  try {
    const header = await getToken();
    const id = {
      plateId: plate.id,
    };
    const favorite = await api.post('/favorito/prato', id, header);
    return favorite.status;
  } catch (e) {
    console.log(e);
  }
}

export async function removeFavoritePlate(plate: PlateData) {
  try {
    const header = await getToken();
    const favorite = await api.delete(`/favorito/remover/${plate.id}`, header);
    return favorite.status;
  } catch (e) {
    console.log(e);
  }
}

export async function compareFavoritePlates(plateId: string) {
  try {
    const header = await getToken();
    const favorite = await api.get(`/favorito/checar/${plateId}`, header);
    return favorite.data;
  } catch (e) {
    console.log('compareFavorite:', e);
    return false;
  }
}
