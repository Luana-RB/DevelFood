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
import {RestaurantsData} from '../../../../types/restaurantData';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import {useRestaurant} from '../../../../services/context/restaurantContext';
import {colors, screenHeight} from '../../../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface RestaurantProps {
  data: RestaurantsData;
  navigation: any;
}

const RestaurantCard: React.FC<RestaurantProps> = ({data, navigation}) => {
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>();
  const [fontSize, setFontSize] = useState(screenHeight * 0.019);
  const {storeData} = useRestaurant();

  useEffect(() => {
    if (data) {
      if (!!data.fotos) {
        setImagePath({uri: data.fotos});
      } else {
        setImagePath(require('../../../../../assets/images/notFound.png'));
      }
    }
    if (data?.nome.length >= 19) setFontSize(screenHeight * 0.016);
    else if (data?.nome.length >= 15) setFontSize(screenHeight * 0.018);
  }, []);

  function handleNavigation() {
    const response = storeData(data);
    if (response !== null) navigation.navigate('RestaurantProfile');
  }

  return (
    <TouchableOpacity onPress={handleNavigation}>
      <Container>
        <HeartContainer>
          <Icon name="heart-outline" size={25} color={colors.red} />
        </HeartContainer>
        {imagePath && <BackGroundImage source={imagePath} resizeMode="cover" />}
        <InfoContainer>
          <TitleContainer>
            <Title style={{fontSize: fontSize}}>{data.nome}</Title>
          </TitleContainer>
          <InfoFooter>
            <Category>{data.tipoComida?.nome}</Category>
            <RatingContainer>
              <Icon name="star" size={15} color={colors.red} />
              <RatingText>5.0</RatingText>
            </RatingContainer>
          </InfoFooter>
        </InfoContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
