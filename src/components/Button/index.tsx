import React from 'react';
import {ButtonContainer, ButtonText} from './styles';

interface ButtonProps {
  text: string;
  handleSubmit: () => void;
}

const Button: React.FC<ButtonProps> = ({text, handleSubmit}) => {
  return (
    <ButtonContainer onPress={handleSubmit}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
