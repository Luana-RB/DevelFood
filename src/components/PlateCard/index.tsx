import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RestaurantPlate} from '../../types/restaurantData';
import {
  BodyContainer,
  Container,
  Description,
  DescriptionContainer,
  FooterContainer,
  PlateImage,
  Price,
  TextContainer,
  Title,
  TitleContainer,
  styles,
} from './styles';
import {ImageSourcePropType} from 'react-native';
import {
  AddButton,
  AddText,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  QuantityText,
} from '../AddButton';
import {colors} from '../../globalStyles';
import {compareFavorites} from '../../services/api/favorites';
import {useFocusEffect} from '@react-navigation/native';

interface PlateCardProps {
  data: RestaurantPlate;
  setCart: (value: boolean) => void;
}

const PlateCard: React.FC<PlateCardProps> = ({data, setCart}) => {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );
  const [price, setPrice] = useState('0,00');
  const [heart, setHeart] = useState('heart-outline');

  useEffect(() => {
    if (!!data.foto) setImagePath({uri: data.foto});
    else setImagePath(require('../../../assets/images/notFound.png'));

    if (!!data.descricao) {
      const text = data.descricao;
      const words = text.split(' ');
      const firstWords = words.slice(0, 20);
      const newDescription = firstWords.join(' ');
      setDescription(newDescription);
    }

    if (!!data.preco) {
      const centsFormat = data.preco.toFixed(2);
      const commaFormat = centsFormat.replace(/\./g, ',');
      setPrice(commaFormat);
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const isFavorite = compareFavorites(data);
      if (isFavorite) setHeart('heart');
      else setHeart('heart-outline');
    }, []),
  );

  return (
    <Container>
      <PlateImage source={imagePath} />
      <Icon
        name={heart}
        color={colors.red}
        style={styles.heartIcon}
        size={20}
      />
      <BodyContainer>
        <TextContainer>
          <TitleContainer>
            <Title>{data.nome}</Title>
          </TitleContainer>
          <DescriptionContainer>
            <Description>{description}</Description>
          </DescriptionContainer>
        </TextContainer>
        <FooterContainer>
          <Price>R$ {price}</Price>
          {quantity === 0 ? (
            <AddButton
              onPress={() => {
                setQuantity(1);
                setCart(true);
              }}>
              <AddText>Adicionar</AddText>
            </AddButton>
          ) : (
            <QuantityContainer>
              {quantity === 1 ? (
                <QuantityButton
                  onPress={() => {
                    setQuantity(0);
                    setCart(false);
                  }}>
                  <Icon
                    name={'trash-can-outline'}
                    color={colors.red}
                    size={20}
                  />
                </QuantityButton>
              ) : (
                <QuantityButton onPress={() => setQuantity(quantity - 1)}>
                  <Icon name={'minus'} color={colors.red} size={20} />
                </QuantityButton>
              )}
              <QuantityBox>
                <QuantityText>{quantity}</QuantityText>
              </QuantityBox>
              <QuantityButton onPress={() => setQuantity(quantity + 1)}>
                <Icon name={'plus'} color={colors.red} size={20} />
              </QuantityButton>
            </QuantityContainer>
          )}
        </FooterContainer>
      </BodyContainer>
    </Container>
  );
};

export default PlateCard;
