import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.TouchableOpacity`
  width: ${screenWidth * 0.25}px;
  height: ${screenHeight * 0.035}px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border-color: ${colors.red};
  border-width: 1.5px;
  margin: 0px 4px;
`;

export const Name = styled.Text`
  font-size: ${fonts.S}px;
  color: ${colors.red};
`;
