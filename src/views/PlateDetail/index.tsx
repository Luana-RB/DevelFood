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
import {
  ActivityIndicator,
  Alert,
  ImageSourcePropType,
  View,
} from 'react-native';
import {
  AddButton,
  AddText,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  QuantityText,
} from '../../components/AddButton/styles';
import {colors, fonts} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {useCart} from '../../services/context/cartContext';
import {useFocusEffect} from '@react-navigation/native';
import {PlateDetailsScreenProps} from '../../types/routeTypes';
import {Restaurant} from '../../types/restaurantData';
import {getRestaurantById} from '../../services/api/restaurants';

const PlateDetail: React.FC<PlateDetailsScreenProps> = ({route}) => {
  const {plate, restaurantId} = route.params;
  const [quantity, setQuantity] = useState(0);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [description, setDescription] = useState('');
  const [thisPrice, setThisPrice] = useState('0,00');
  const [sizeFont, setSize] = useState(fonts.XS);

  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );

  const {addItem, removeItem, removeQuantity, getQuantity} = useCart();

  useEffect(() => {
    loadRestaurantData();
    if (!!plate.image) setImagePath({uri: plate.image});
    else setImagePath(require('../../../assets/images/notFound.png'));
    if (plate.description) formatDescription(plate.description);
    if (plate.price) formatPrice(plate.price);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const newQuantity = getQuantity(plate);
      setQuantity(newQuantity);
    }, []),
  );

  async function loadRestaurantData() {
    const restaurantData = await getRestaurantById(restaurantId);
    if (restaurantData) setRestaurant(restaurantData);
    if (restaurantData.name.length > 15) setSize(fonts.XXS);
    else setSize(fonts.XS);
  }

  function formatDescription(description: string) {
    const text = description;
    const words = text.split(' ');
    const firstWords = words.slice(0, 40);
    const newDescription = firstWords.join(' ');
    setDescription(newDescription);
  }

  function formatPrice(price: number) {
    const centsFormat = price.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setThisPrice(commaFormat);
  }

  function handleAdd() {
    const response = addItem(plate, restaurantId);
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

  if (!restaurant)
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <ActivityIndicator size={60} color={colors.red} style={{margin: 50}} />
      </View>
    );

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <BodyContainer>
        <PlateImage source={imagePath} />
        <HeaderContainer>
          <Title>{plate.name}</Title>
          <SubTitle>{restaurant.foodType?.name}</SubTitle>
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
          <RestaurantName style={{fontSize: sizeFont}}>
            Vendido e entregue por {restaurant?.name}
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
