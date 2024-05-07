import {users} from '../../mocks/users';
import {PlateData} from '../../types/restaurantData';
import {api, getToken} from './api';
import {getPlateDataById} from './plates';

export async function getFavoritePlates(page: number) {
  try {
    // const user = users[0];
    // const favorites = user.favoritePlates;
    // const favoritesPaginated = favorites?.slice(page, page + 5);
    // return favoritesPaginated;
    const header = await getToken();
    const favorite = await api.get(`/favorito/pratos?page=${page}`, header);
    console.log(favorite.data.content[0]);
    return favorite.data.content;
  } catch (e) {
    console.log('get favorites ', e);
  }
}

export async function addFavoritePlate(plate: PlateData) {
  try {
    // const user = users[0];
    // if (!user.favoritePlates) user.favoritePlates = [{id: plate.id}];
    // else user.favoritePlates.push({id: plate.id});
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
    // const user = users[0];
    // const favorites = user.favoritePlates;
    // if (favorites?.length === 0) return;
    // user.favoritePlates = favorites!.filter(item => item.id !== plate.id);
    const header = await getToken();
    const favorite = await api.delete(`/favorito/remover/${plate.id}`, header);
    return favorite.status;
  } catch (e) {
    console.log(e);
  }
}

export async function compareFavoritePlates(plateId: string) {
  try {
    // const user = users[0];
    // const favorites = user.favoritePlates;
    // if (favorites?.length === 0) return false;
    // const newFavorites = favorites!.filter(item => item.id === plate.id);
    // if (newFavorites.length > 0) return true;
    // return false;
    const header = await getToken();
    const favorite = await api.get(`/favorito/checar/${plateId}`, header);
    return favorite.data;
  } catch (e) {
    console.log('compareFavorite:', e);
    return false;
  }
}
