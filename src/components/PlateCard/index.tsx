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
import {Alert, ImageSourcePropType} from 'react-native';
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
import {useCart} from '../../services/context/cartContext';

interface PlateCardProps {
  data: RestaurantPlate;
}

const PlateCard: React.FC<PlateCardProps> = ({data}) => {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );
  const [thisPrice, setThisPrice] = useState('0,00');
  const [heart, setHeart] = useState('heart-outline');
  const {addItem, removeItem, removeQuantity, getQuantity, price} = useCart();

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

    const centsFormat = data.preco.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setThisPrice(commaFormat);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const isFavorite = compareFavorites(data);
      if (isFavorite) setHeart('heart');
      else setHeart('heart-outline');

      const newQuantity = getQuantity(data);
      setQuantity(newQuantity);
    }, [price]),
  );

  function handleAdd() {
    const response = addItem(data);
    if (response) setQuantity(quantity + 1);
    else Alert.alert('Faça pedidos em um restaurante por vez!');
  }

  function handleRemove() {
    if (quantity === 1) {
      const quantityInCart = getQuantity(data);
      removeItem(data, quantityInCart);
    } else if (quantity > 1) removeQuantity(data);

    setQuantity(quantity - 1);
  }

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
          <Price>R$ {thisPrice}</Price>
          {quantity === 0 ? (
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
          )}
        </FooterContainer>
      </BodyContainer>
    </Container>
  );
};

export default PlateCard;
