import React from 'react';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import Button from '../../components/Button';
import {Container, Image, Text, Title} from './styles';
import {CheckoutOrderScreenProps} from '../../types/routeTypes';

const CheckoutOrder: React.FC<CheckoutOrderScreenProps> = ({
  navigation,
  route,
}: any) => {
  const {orderId} = route.params;

  function handleSubmit() {
    navigation.navigate('OrderDetails', orderId);
  }

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={colors.red}
      />
      <Title>Pedido realizado!</Title>
      <Image source={require('../../../assets/images/orderSuccess.png')} />
      <Text>
        Agradecemos a preferência! Em breve você receberá atualizações sobre o
        status do seu pedido!
      </Text>
      <Button text="Ver o pedido" handleSubmit={handleSubmit} />
    </Container>
  );
};

export default CheckoutOrder;
