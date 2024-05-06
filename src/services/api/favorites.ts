import {users} from '../../mocks/users';
import {PlateData, RestaurantData} from '../../types/restaurantData';
import {api, getToken} from './api';
import {getPlateDataById} from './plates';

export function getFavoritePlates(page: number) {
  try {
    const user = users[0];
    const favorites = user.favoritePlates;
    const favoritesPaginated = favorites.slice(page, page + 5);
    return favoritesPaginated;
  } catch (e) {
    console.log(e);
  }
}
export async function getFavoritePlatesFiltered(page: number, filter: string) {
  try {
    const user = users[0];
    const favorites = user.favoritePlates;
    const plates: PlateData[] = [];
    for (let i = 0; i < favorites.length; i++) {
      const plateId = favorites[i].id;
      const plateData = await getPlateDataById(plateId);
      if (plateData) plates.push(plateData);
    }
    const newData = plates?.filter((item: {name: string}) => {
      const name = item.name.toUpperCase();
      const text = filter.toUpperCase();
      return name.indexOf(text) > -1;
    });
    return newData;
  } catch (e) {
    console.log(e);
  }
}
export function getFavoritesRestaurants() {
  try {
    const user = users[0];
    const favorites = user.favoriteRestaurants;
    return favorites;
  } catch (e) {
    console.log(e);
  }
}

export async function addFavoritePlate(plate: PlateData) {
  try {
    const user = users[0];
    if (!user.favoritePlates) user.favoritePlates = [{id: plate.id}];
    else user.favoritePlates.push({id: plate.id});
    // const header = await getToken();
    // const id = plate.id;
    // const favorite = await api.post('/favorito/prato', id, header);
  } catch (e) {
    console.log(e);
  }
}
export function addFavoriteRestaurant(restaurant: RestaurantData) {
  try {
    const user = users[0];
    if (!user.favoriteRestaurants)
      user.favoriteRestaurants = [{id: restaurant.id}];
    else user.favoriteRestaurants.push({id: restaurant.id});
  } catch (e) {
    console.log(e);
  }
}
export function removeFavoritePlate(plate: PlateData) {
  try {
    const user = users[0];
    const favorites = user.favoritePlates;
    if (favorites?.length === 0) return;
    user.favoritePlates = favorites!.filter(item => item.id !== plate.id);
  } catch (e) {
    console.log(e);
  }
}
export function removeFavoriteRestaurant(restaurant: RestaurantData) {
  try {
    const user = users[0];
    const favorites = user.favoriteRestaurants;
    if (favorites?.length === 0) return;
    user.favoriteRestaurants = favorites!.filter(
      item => item.id !== restaurant.id,
    );
  } catch (e) {
    console.log(e);
  }
}

export function compareFavoritePlates(plate: PlateData) {
  try {
    const user = users[0];
    const favorites = user.favoritePlates;
    if (favorites?.length === 0) return false;
    const newFavorites = favorites!.filter(item => item.id === plate.id);
    if (newFavorites.length > 0) return true;
    return false;
  } catch (e) {
    console.log('compareFavorite:', e);
    return false;
  }
}
export function compareFavoriteRestaurant(restaurant: RestaurantData) {
  try {
    const user = users[0];
    const favorites = user.favoriteRestaurants;
    if (favorites?.length === 0) return false;
    const newFavorites = favorites!.filter(item => item.id === restaurant.id);
    if (newFavorites.length > 0) return true;
    return false;
  } catch (e) {
    console.log('compareFavorite:', e);
    return false;
  }
}
