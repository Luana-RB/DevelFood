import React from 'react';
import {Image, Text, View} from 'react-native';
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
} from './styles';

// import { Container } from './styles';

const RestaurantCard: React.FC = () => {
  return (
    <Container>
      <HeartContainer>
        <HeartImage
          source={require('../../../assets/images/heart_outline.png')}
        />
      </HeartContainer>
      <BackGroundImage
        source={require('../../../assets/images/bgPizza.png')}
        resizeMode="cover"
      />
      <InfoContainer>
        <Title>Nome</Title>
        <InfoFooter>
          <Category>Categoria</Category>
          <RatingContainer>
            <RatingIcon source={require('../../../assets/images/star.png')} />
            <RatingText>5.0</RatingText>
          </RatingContainer>
        </InfoFooter>
      </InfoContainer>
    </Container>
  );
};

export default RestaurantCard;
