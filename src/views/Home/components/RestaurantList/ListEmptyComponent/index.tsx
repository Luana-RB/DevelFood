import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../../../../globalStyles';
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from '../../../../../components/NoResultComponent';
const MAX_WAITING_TIME = 6000;

export default function ListEmptyComponent() {
  const [show, setShow] = useState(false);

  setTimeout(function () {
    setShow(true);
  }, MAX_WAITING_TIME);

  if (!show) return <ActivityIndicator size={50} color={colors.red} />;

  if (show) {
    return (
      <NoResultContainer>
        <NoResultImage
          source={require('../../../../../../assets/images/notFoundRestaurant.png')}
        />
        <NoResultText>Nenhum restaurante encontrado</NoResultText>
      </NoResultContainer>
    );
  } else return null;
}
