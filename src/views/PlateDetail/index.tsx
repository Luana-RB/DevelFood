import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BodyContainer,
  Container,
  Description,
  DescriptionContainer,
  FooterContainer,
  HeaderContainer,
  PlateImage,
  Price,
  RestaurantContainer,
  RestaurantName,
  SubTitle,
  Title,
} from './styles';
import {PlateDetailsScreenProps} from '../../types/restaurantData';
import {Alert, ImageSourcePropType} from 'react-native';
import {
  AddButton,
  AddText,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  QuantityText,
} from '../../components/AddButton';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {useCart} from '../../services/context/cartContext';
import {useFocusEffect} from '@react-navigation/native';

const PlateDetail: React.FC<PlateDetailsScreenProps> = ({route}) => {
  const {plate, restaurant} = route.params;
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [thisPrice, setThisPrice] = useState('0,00');
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );

  const {addItem, removeItem, removeQuantity, getQuantity, price} = useCart();

  useEffect(() => {
    if (!!plate.foto) setImagePath({uri: plate.foto});
    else setImagePath(require('../../../assets/images/notFound.png'));

    if (!!plate.descricao) {
      const text = plate.descricao;
      const words = text.split(' ');
      const firstWords = words.slice(0, 40);
      const newDescription = firstWords.join(' ');
      setDescription(newDescription);
    }

    formatPrice(plate.preco);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const newQuantity = getQuantity(plate);
      setQuantity(newQuantity);
    }, []),
  );

  function formatPrice(price: number) {
    const centsFormat = price.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setThisPrice(commaFormat);
  }

  function handleAdd() {
    const response = addItem(plate);
    if (response) setQuantity(quantity + 1);
    else Alert.alert('Faça pedidos em um restaurante por vez');
  }

  function handleRemove() {
    if (quantity === 1) {
      const quantityInCart = getQuantity(plate);
      removeItem(plate, quantityInCart);
    } else if (quantity > 1) removeQuantity(plate);

    setQuantity(quantity - 1);
  }

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <BodyContainer>
        <PlateImage source={imagePath} />
        <HeaderContainer>
          <Title>{plate.nome}</Title>
          <SubTitle>{restaurant.categoria}</SubTitle>
        </HeaderContainer>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
        <RestaurantContainer>
          <Icon
            name="store"
            size={30}
            color={colors.red}
            style={{marginVertical: 10, marginHorizontal: 15}}
          />
          <RestaurantName>
            Vendido e entregue por {restaurant?.nome}
          </RestaurantName>
        </RestaurantContainer>
      </BodyContainer>
      <FooterContainer>
        <Price>R$ {thisPrice}</Price>
        {quantity === 0 ? (
          <AddButton onPress={handleAdd}>
            <AddText style={{color: colors.white}}>Adicionar</AddText>
          </AddButton>
        ) : (
          <QuantityContainer>
            {quantity === 1 ? (
              <QuantityButton onPress={handleRemove}>
                <Icon
                  name={'trash-can-outline'}
                  color={colors.white}
                  size={25}
                />
              </QuantityButton>
            ) : (
              <QuantityButton onPress={handleRemove}>
                <Icon name={'minus'} color={colors.white} size={25} />
              </QuantityButton>
            )}
            <QuantityBox style={{borderColor: colors.white}}>
              <QuantityText>{quantity}</QuantityText>
            </QuantityBox>
            <QuantityButton onPress={handleAdd}>
              <Icon name={'plus'} color={colors.white} size={25} />
            </QuantityButton>
          </QuantityContainer>
        )}
      </FooterContainer>
    </Container>
  );
};

export default PlateDetail;
