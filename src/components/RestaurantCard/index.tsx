import React, {useEffect, useState} from 'react';
import {
  BackGroundImage,
  Category,
  Container,
  HeartContainer,
  HeartImage,
  InfoContainer,
  InfoFooter,
  RatingContainer,
  RatingIcon,
  RatingText,
  Title,
  TitleContainer,
} from './styles';
import {RestaurantsData} from '../../types/restaurantData';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import {useRestaurant} from '../../services/context/restaurantContext';

interface RestaurantProps {
  data: RestaurantsData;
  navigation: any;
}

const RestaurantCard: React.FC<RestaurantProps> = ({data, navigation}) => {
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>();
  const {storeData} = useRestaurant();

  useEffect(() => {
    if (data) {
      if (!!data.fotos) {
        setImagePath({uri: data.fotos});
      } else {
        setImagePath(require('../../../assets/images/notFound.png'));
      }
    }
  }, []);

  function handleNavigation() {
    const response = storeData(data);
    if (response !== null) navigation.navigate('RestaurantProfile');
  }

  return (
    <TouchableOpacity onPress={handleNavigation}>
      <Container>
        <HeartContainer>
          <HeartImage
            source={require('../../../assets/images/heart_outline.png')}
          />
        </HeartContainer>
        {imagePath && <BackGroundImage source={imagePath} resizeMode="cover" />}
        <InfoContainer>
          <TitleContainer>
            <Title>{data.nome}</Title>
          </TitleContainer>
          <InfoFooter>
            <Category>{data.tipoComida?.nome}</Category>
            <RatingContainer>
              <RatingIcon source={require('../../../assets/images/star.png')} />
              <RatingText>5.0</RatingText>
            </RatingContainer>
          </InfoFooter>
        </InfoContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
