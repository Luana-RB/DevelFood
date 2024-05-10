import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PlateData} from '../../types/restaurantData';
import {Alert, ImageSourcePropType} from 'react-native';
import {colors, screenWidth} from '../../globalStyles';
import {useFocusEffect} from '@react-navigation/native';
import {useCart} from '../../services/context/cartContext';
import {compareFavoritePlates} from '../../services/api/favorites';
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
import {
  AddButton,
  AddText,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  QuantityText,
} from '../AddButton/styles';

interface PlateCardProps {
  data: PlateData;
  small?: boolean;
  finished?: boolean;
  number?: number;
  restaurantId: string;
}

const PlateCard: React.FC<PlateCardProps> = ({
  data,
  small,
  finished,
  restaurantId,
  number,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );
  const [thisPrice, setThisPrice] = useState('0,00');
  const [heart, setHeart] = useState('house');
  const [size, setSize] = useState(screenWidth * 0.9);
  const {addItem, removeItem, removeQuantity, getQuantity, price} = useCart();
  let maxLength = 20;

  useEffect(() => {
    if (small) {
      setSize(screenWidth * 0.8);
      maxLength = 6;
    }

    if (!!data.image) setImagePath({uri: data.image});
    else setImagePath(require('../../../assets/images/notFound.png'));

    if (!!data.description) {
      const text = data.description;
      const words = text.split(' ');
      const firstWords = words.slice(0, maxLength);
      const newDescription = firstWords.join(' ');
      setDescription(newDescription);
    }

    const centsFormat = data.price.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setThisPrice(commaFormat);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      handleFavorite();
      const newQuantity = getQuantity(data);
      setQuantity(newQuantity);
    }, [price]),
  );

  async function handleFavorite() {
    const isFavorite = await compareFavoritePlates(data.id);
    if (isFavorite) {
      setHeart('heart');
    } else setHeart('heart-outline');
  }

  function handleAdd() {
    const response = addItem(data, restaurantId);
    if (response) setQuantity(quantity + 1);
    else Alert.alert('Faça pedidos em um restaurante por vez');
  }

  function handleRemove() {
    if (quantity === 1) removeItem(data, 1);
    else if (quantity > 1) removeQuantity(data);
    setQuantity(quantity - 1);
  }

  if (heart === 'house') return;

  return (
    <Container style={{width: size}}>
      <PlateImage source={imagePath} />
      {!small && (
        <Icon
          name={heart}
          color={colors.red}
          style={styles.heartIcon}
          size={20}
        />
      )}
      <BodyContainer>
        <TextContainer>
          <TitleContainer>
            <Title>{data.name}</Title>
          </TitleContainer>
          <DescriptionContainer>
            <Description>{description}</Description>
          </DescriptionContainer>
        </TextContainer>
        <FooterContainer>
          <Price>R$ {thisPrice}</Price>
          {!finished &&
            (quantity === 0 ? (
              <AddButton onPress={handleAdd}>
                <AddText>Adicionar</AddText>
              </AddButton>
            ) : (
              <QuantityContainer>
                {quantity === 1 ? (
                  <QuantityButton onPress={handleRemove}>
                    <Icon
                      name={'trash-can-outline'}
                      color={colors.red}
                      size={20}
                    />
                  </QuantityButton>
                ) : (
                  <QuantityButton onPress={handleRemove}>
                    <Icon name={'minus'} color={colors.red} size={20} />
                  </QuantityButton>
                )}
                <QuantityBox>
                  <QuantityText>{quantity}</QuantityText>
                </QuantityBox>
                <QuantityButton onPress={handleAdd}>
                  <Icon name={'plus'} color={colors.red} size={20} />
                </QuantityButton>
              </QuantityContainer>
            ))}
          {finished && (
            <QuantityContainer>
              <QuantityBox>
                <QuantityText>{number}</QuantityText>
              </QuantityBox>
            </QuantityContainer>
          )}
        </FooterContainer>
      </BodyContainer>
    </Container>
  );
};

export default PlateCard;
