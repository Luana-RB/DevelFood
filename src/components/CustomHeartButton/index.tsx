import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  addFavorite,
  compareFavorites,
  compareRestaurant,
  removeFavorite,
} from '../../services/api/favorites';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globalStyles';

export function CustomHeartButton({route}: any) {
  const [heart, setHeart] = useState<boolean | undefined>(true);
  const [imagePath, setImagePath] = useState<string>('heart-outline');

  useFocusEffect(
    React.useCallback(() => {
      if (route.name === 'PlateDetails') {
        const {plate} = route.params;
        const isFavoriteResult = compareFavorites(plate);
        setHeart(isFavoriteResult);
      } else if (route.name === 'RestaurantProfile') {
        const {restaurant} = route.params;
        const isFavoriteResult = compareRestaurant(restaurant.id);
        setHeart(isFavoriteResult);
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

  function handleChange() {
    if (route.name === 'PlateDetails') {
      setHeart(!heart);
      const {prato} = route.params;
      if (heart) removeFavorite(prato);
      else addFavorite(prato);
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
