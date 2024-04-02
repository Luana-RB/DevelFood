import React from 'react';
import {
  CartContainer,
  CartIcon,
  Container,
  Price,
  QuantityContainer,
  QuantityText,
  Title,
} from './styles';

const CartBar: React.FC = () => {
  return (
    <Container>
      <CartContainer>
        <CartIcon source={require('./assets/cart.png')} />
        <QuantityContainer>
          <QuantityText>9+</QuantityText>
        </QuantityContainer>
      </CartContainer>
      <Title>Ver Carrinho</Title>
      <Price>R$ 49,90</Price>
    </Container>
  );
};

export default CartBar;
