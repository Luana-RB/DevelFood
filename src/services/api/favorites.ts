import {users} from '../../mocks/users';
import {PlateData, RestaurantData} from '../../types/restaurantData';
import {getPlateDataById} from './plates';

export function getFavoritePlates() {
  try {
    const user = users[0];
    const favorites = user.favoritePlates;
    console.log(favorites);
    return favorites;
  } catch (e) {
    console.log(e);
  }
}
export function getFavoritesRestaurants() {
  try {
    const user = users[0];
    const favorites = user.favoriteRestaurants;
    console.log(favorites);
    return favorites;
  } catch (e) {
    console.log(e);
  }
}

export function addFavoritePlate(plate: PlateData) {
  try {
    const user = users[0];
    if (!user.favoritePlates) user.favoritePlates = [{id: plate.id}];
    else user.favoritePlates.push({id: plate.id});
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
