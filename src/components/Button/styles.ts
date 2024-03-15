import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.red};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${screenWidth * 0.75}px;
  height: ${screenHeight * 0.06}px;
  margin-top: ${screenHeight * 0.02}px;
  margin-bottom: ${screenHeight * 0.02}px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: bold;
`;
