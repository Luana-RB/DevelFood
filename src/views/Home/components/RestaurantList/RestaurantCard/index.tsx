import React, {useEffect, useState} from 'react';
import {
  BackGroundImage,
  Category,
  Container,
  HeartContainer,
  InfoContainer,
  InfoFooter,
  RatingContainer,
  RatingText,
  Title,
  TitleContainer,
} from './styles';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import {colors, screenHeight} from '../../../../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect} from '@react-navigation/native';
import {compareFavoriteRestaurant} from '../../../../../services/api/favorites';

interface RestaurantProps {
  list: any;
  navigation: any;
}

const RestaurantCard: React.FC<RestaurantProps> = ({list, navigation}) => {
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>();
  const [fontSize, setFontSize] = useState(screenHeight * 0.019);
  const [heart, setHeart] = useState('heart-outline');
  const data = list.restaurant;
  const rating = list.rating;

  useEffect(() => {
    if (!!data.image) setImagePath({uri: data.image});
    else setImagePath(require('../../../../../../assets/images/notFound.png'));

    if (data?.name.length >= 19) setFontSize(screenHeight * 0.016);
    else if (data?.name.length >= 15) setFontSize(screenHeight * 0.018);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      async function loadData() {
        const isFavorite = await compareFavoriteRestaurant(data);
        if (isFavorite) setHeart('heart');
        else setHeart('heart-outline');
      }
      loadData();
    }, []),
  );

  function handleNavigation() {
    if (data) navigation.navigate('RestaurantProfile', {restaurantId: data.id});
  }

  return (
    <TouchableOpacity onPress={handleNavigation}>
      <Container>
        <HeartContainer>
          <Icon name={heart} size={25} color={colors.red} />
        </HeartContainer>
        {imagePath && <BackGroundImage source={imagePath} resizeMode="cover" />}
        <InfoContainer>
          <TitleContainer>
            <Title style={{fontSize: fontSize}}>{data?.name}</Title>
          </TitleContainer>
          <InfoFooter>
            <Category>{data?.foodType?.name}</Category>
            <RatingContainer>
              <Icon name="star" size={15} color={colors.red} />
              <RatingText>{rating.toFixed(1)}</RatingText>
            </RatingContainer>
          </InfoFooter>
        </InfoContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
