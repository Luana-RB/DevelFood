import React, {useEffect, useState} from 'react';
import {AddressText, Container} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../globalStyles';
import {UserAddress} from '../../../../types/userData';
import {useUser} from '../../../../services/context/userContext';

const AddressBanner: React.FC = () => {
  const [text, setText] = useState('');
  const {userData} = useUser();

  useEffect(() => {
    const addressText =
      'rua ' +
      userData?.address?.rua +
      ' ' +
      userData?.address?.num +
      ', ' +
      userData?.address?.bairro;
    setText(addressText);
  }, [userData]);

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
