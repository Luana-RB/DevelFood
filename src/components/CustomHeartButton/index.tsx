import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globalStyles';
import {
  addFavoritePlate,
  compareFavoritePlates,
  removeFavoritePlate,
} from '../../services/api/favorites';

export function CustomHeartButton({route}: any) {
  const [heart, setHeart] = useState<boolean | undefined>(false);
  const [imagePath, setImagePath] = useState<string>('heart-outline');

  useFocusEffect(
    React.useCallback(() => {
      handleFavorite();
    }, []),
  );

  async function handleFavorite() {
    if (route.name === 'PlateDetails') {
      const {plate} = route.params;
      const isFavoriteResult = await compareFavoritePlates(plate.id);
      setHeart(isFavoriteResult);
    } else if (route.name === 'RestaurantProfile') {
      const {restaurantId} = route.params;
    }
  }

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
