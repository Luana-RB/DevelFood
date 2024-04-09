import {users} from '../../mocks/users';
import {RestaurantPlate} from '../../types/restaurantData';

export function getFavorites() {
  try {
    const user = users[0];
    const favorites = user.favorites;
    return favorites;
  } catch (e) {
    console.log(e);
  }
}

export function addFavorite(plate: RestaurantPlate) {
  try {
    const user = users[0];
    user.favorites.push(plate);
  } catch (e) {
    console.log(e);
  }
}
export function removeFavorite(plate: RestaurantPlate) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return;
    user.favorites = favorites.filter(item => item.id !== plate.id);
  } catch (e) {
    console.log(e);
  }
}

export function compareFavorites(plate: RestaurantPlate) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return false;
    const newFavorites = favorites.filter(item => item.id === plate.id);
    if (newFavorites.length > 0) return true;
    else return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}
