import React from 'react';
import {View} from 'react-native';
import {AddressText, Container, Icon} from './styles';

const AddressBanner: React.FC = () => {
  return (
    <Container>
      <Icon source={require('../../../../../assets/images/address.png')} />
      <AddressText>rua Arcy da Nobrega 667, Panazollo</AddressText>
    </Container>
  );
};

export default AddressBanner;
