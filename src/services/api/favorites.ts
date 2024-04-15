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
    if (!user.favorites) user.favorites = [plate];
    else user.favorites.push(plate);
  } catch (e) {
    console.log(e);
  }
}
export function removeFavorite(plate: RestaurantPlate) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return;
    user.favorites = favorites!.filter(item => item.id !== plate.id);
  } catch (e) {
    console.log(e);
  }
}

export function compareFavorites(plate: RestaurantPlate) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return false;
    const newFavorites = favorites!.filter(item => item.id === plate.id);
    if (newFavorites.length > 0) return true;
    return false;
  } catch (e) {
    console.log('compareFavorite:', e);
    return false;
  }
}

export function compareRestaurant(restaurantId: string) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return false;
    const newFavorites = favorites!.filter(item => {
      return item.restaurantId === restaurantId;
    });
    if (newFavorites.length > 0) return true;
    return false;
  } catch (e) {
    console.log('compareRestaurant:', e);
    return false;
  }
}
