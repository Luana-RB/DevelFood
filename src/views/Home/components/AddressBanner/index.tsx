import React, {useEffect, useState} from 'react';
import {AddressText, Container} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../globalStyles';
import {useUser} from '../../../../services/context/userContext';

const AddressBanner: React.FC = () => {
  const [text, setText] = useState('');
  const {userAddress} = useUser();

  useEffect(() => {
    const addressText =
      'rua ' +
      userAddress?.street +
      ' ' +
      userAddress?.number +
      ', ' +
      userAddress?.neighbourhood;
    setText(addressText);
  }, [userAddress]);

  return (
    <Container>
      <Icon
        name="map-marker"
        size={30}
        color={colors.white}
        style={{marginRight: 8}}
      />
      <AddressText>{text}</AddressText>
    </Container>
  );
};

export default AddressBanner;
