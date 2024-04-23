import React, {useEffect, useState} from 'react';
import {
  CartContainer,
  Container,
  Price,
  QuantityContainer,
  QuantityText,
  Title,
} from './styles';
import {useCart} from '../../services/context/cartContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globalStyles';
import {TouchableOpacity} from 'react-native';

interface CartBarProps {
  margin: number;
  navigation: any;
}

const CartBar: React.FC<CartBarProps> = ({margin, navigation}) => {
  const {numOfItems, price} = useCart();
  const [shownNum, setShownNum] = useState('0');
  const [shownPrice, setShownPrice] = useState('0.00');

  useEffect(() => {
    if (numOfItems > 9) setShownNum('9+');
    else setShownNum(String(numOfItems));

    const centsFormat = price.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setShownPrice(commaFormat);
  }, [numOfItems, price]);

  return (
    <Container style={{marginTop: margin}}>
      <CartContainer>
        <Icon name="cart-variant" size={24} color={colors.white} />
        <QuantityContainer>
          <QuantityText>{shownNum}</QuantityText>
        </QuantityContainer>
      </CartContainer>
      <TouchableOpacity onPress={navigation.navigate('CartPage')}>
        <Title>Ver Carrinho</Title>
      </TouchableOpacity>
      <Price>R$ {shownPrice}</Price>
    </Container>
  );
};

export default CartBar;
