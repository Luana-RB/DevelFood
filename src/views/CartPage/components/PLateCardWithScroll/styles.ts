import styled from 'styled-components/native';
import {
  colors,
  fonts,
  screenHeight,
  screenWidth,
} from '../../../../globalStyles';

export const DeleteContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${screenWidth * 0.34}px;
  height: ${screenHeight * 0.18}px;
  border-radius: 8px;
  background-color: ${colors.red};
  position: absolute;
  margin: ${screenHeight * 0.015}px ${screenWidth * 0.043}px;
`;
export const DeleteText = styled.Text`
  font-size: ${fonts.M}px;
  color: ${colors.white};
`;
