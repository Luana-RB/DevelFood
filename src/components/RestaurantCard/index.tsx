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
import {ImageSourcePropType} from 'react-native';

interface RestaurantProps {
  data: RestaurantsData;
}

const RestaurantCard: React.FC<RestaurantProps> = ({data}) => {
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>();

  useEffect(() => {
    if (data) {
      if (!!data.info.imageUrl) {
        setImagePath({uri: data.info.imageUrl});
      } else {
        setImagePath(require('../../../assets/images/notFound.png'));
      }
    }
  }, []);

  return (
    <Container>
      <HeartContainer>
        <HeartImage
          source={require('../../../assets/images/heart_outline.png')}
        />
      </HeartContainer>
      {imagePath && <BackGroundImage source={imagePath} resizeMode="cover" />}
      <InfoContainer>
        <TitleContainer>
          <Title>{data.info.name}</Title>
        </TitleContainer>
        <InfoFooter>
          <Category>{data.info.category}</Category>
          <RatingContainer>
            <RatingIcon source={require('../../../assets/images/star.png')} />
            <RatingText>{String(data.info.rating)}</RatingText>
          </RatingContainer>
        </InfoFooter>
      </InfoContainer>
    </Container>
  );
};

export default RestaurantCard;
