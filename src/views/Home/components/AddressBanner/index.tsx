import React from 'react';

import {AddressText, Container} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../globalStyles';

const AddressBanner: React.FC = () => {
  return (
    <Container>
      <Icon
        name="map-marker"
        size={30}
        color={colors.white}
        style={{marginRight: 8}}
      />
      <AddressText>rua Arcy da Nobrega 667, Panazollo</AddressText>
    </Container>
  );
};

export default AddressBanner;
