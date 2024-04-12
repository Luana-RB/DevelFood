import React from 'react';
import {ButtonContainer, ButtonText} from './styles';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../globalStyles';

interface ButtonProps {
  text: string;
  handleSubmit: () => void;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({text, handleSubmit, loading}) => {
  return (
    <ButtonContainer onPress={handleSubmit}>
      {loading ? (
        <ActivityIndicator size={30} color={colors.white} />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </ButtonContainer>
  );
};

export default Button;
