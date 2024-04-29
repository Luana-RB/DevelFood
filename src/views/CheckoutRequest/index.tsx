import React from 'react';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import Button from '../../components/Button';
import {Container, Image, Text, Title} from './styles';
import {CheckoutRequestScreenProps} from '../../types/routeTypes';

const CheckoutRequest: React.FC<CheckoutRequestScreenProps> = ({
  navigation,
  route,
}: any) => {
  const {requestId} = route.params;

  function handleSubmit() {
    navigation.replace('RequestDetail', {requestId: requestId});
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

export default CheckoutRequest;
