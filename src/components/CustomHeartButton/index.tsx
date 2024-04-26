import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globalStyles';
import {
  addFavoritePlate,
  addFavoriteRestaurant,
  compareFavoritePlates,
  compareFavoriteRestaurant,
  removeFavoritePlate,
  removeFavoriteRestaurant,
} from '../../services/api/favorites';
import {getRestaurantById} from '../../services/api/restaurants';

export function CustomHeartButton({route}: any) {
  const [heart, setHeart] = useState<boolean | undefined>(true);
  const [imagePath, setImagePath] = useState<string>('heart-outline');

  useFocusEffect(
    React.useCallback(() => {
      if (route.name === 'PlateDetails') {
        const {plate} = route.params;
        const isFavoriteResult = compareFavoritePlates(plate);
        setHeart(isFavoriteResult);
      } else if (route.name === 'RestaurantProfile') {
        const {restaurantId} = route.params;
        checkIfRestaurantIsFavorited(restaurantId);
      }

      async function checkIfRestaurantIsFavorited(restaurantId: string) {
        const restaurantData = await getRestaurantById(restaurantId);
        if (restaurantData) {
          const isFavoriteResult = await compareFavoriteRestaurant(
            restaurantData,
          );
          setHeart(isFavoriteResult);
        }
      }
    }, []),
  );

  useEffect(() => {
    handleImagePath();
  }, [heart]);

  function handleImagePath() {
    if (heart) setImagePath('heart');
    else setImagePath('heart-outline');
  }

  async function handleChange() {
    if (route.name === 'PlateDetails') {
      setHeart(!heart);
      const {plate} = route.params;
      if (heart) removeFavoritePlate(plate);
      else addFavoritePlate(plate);
    }
    if (route.name === 'RestaurantProfile') {
      setHeart(!heart);
      const {restaurantId} = route.params;
      const restaurantData = await getRestaurantById(restaurantId);
      if (restaurantData) {
        if (heart) removeFavoriteRestaurant(restaurantData);
        else addFavoriteRestaurant(restaurantData);
      }
    }
  }

  return (
    <TouchableOpacity onPress={handleChange}>
      <Icon
        name={imagePath}
        color={colors.red}
        size={35}
        style={{marginHorizontal: 20}}
      />
    </TouchableOpacity>
  );
}
