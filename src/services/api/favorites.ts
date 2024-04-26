import {users} from '../../mocks/users';
import {PlateData} from '../../types/restaurantData';
import {getPlateData} from './plates';

export function getFavorites() {
  try {
    const user = users[0];
    const favorites = user.favorites;
    return favorites;
  } catch (e) {
    console.log(e);
  }
}

export function addFavorite(plate: PlateData) {
  try {
    const user = users[0];
    if (!user.favorites) user.favorites = [{plateId: plate.id}];
    else user.favorites.push({plateId: plate.id});
  } catch (e) {
    console.log(e);
  }
}
export function removeFavorite(plate: PlateData) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return;
    user.favorites = favorites!.filter(item => item.plateId !== plate.id);
  } catch (e) {
    console.log(e);
  }
}

export function compareFavorites(plate: PlateData) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return false;
    const newFavorites = favorites!.filter(item => item.plateId === plate.id);
    if (newFavorites.length > 0) return true;
    return false;
  } catch (e) {
    console.log('compareFavorite:', e);
    return false;
  }
}

export async function compareRestaurant(restaurantId: string) {
  try {
    const user = users[0];
    const favorites = user.favorites;
    if (favorites?.length === 0) return false;
    const response = await Promise.all(
      favorites.map(async item => {
        const plateData = await getPlateData(item.plateId);
        return plateData && plateData.restaurantId === restaurantId;
      }),
    );

    const anyMatched = response.some(matched => matched === true);
    return anyMatched;
  } catch (e) {
    console.log('compareRestaurant:', e);
    return false;
  }
}
