import React, {useEffect, useState} from 'react';
import {AddressText, Container} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../globalStyles';
import {useUser} from '../../../../services/context/userContext';
import {useFocusEffect} from '@react-navigation/native';

const AddressBanner: React.FC = () => {
  const [text, setText] = useState('');
  const {userAddress} = useUser();

  useFocusEffect(
    React.useCallback(() => {
      handleAddress();
    }, [userAddress]),
  );

  function handleAddress() {
    if (userAddress) {
      const addressText =
        'Rua ' + userAddress.street + ' ' + userAddress.number;
      setText(addressText);
    }
  }

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
