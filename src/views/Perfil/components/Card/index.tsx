import React from 'react';
import {Container, Text} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../globalStyles';

interface CardProps {
  icon: string;
  text: string;
  handleSubmit: () => void;
}

const Card: React.FC<CardProps> = ({icon, text, handleSubmit}) => {
  return (
    <Container onPress={handleSubmit}>
      <Icon name={icon} size={30} color={colors.gray} />
      <Text>{text}</Text>
      <Icon
        name={'chevron-right'}
        size={20}
        color={colors.gray}
        style={{right: 25, position: 'absolute'}}
      />
    </Container>
  );
};

export default Card;
