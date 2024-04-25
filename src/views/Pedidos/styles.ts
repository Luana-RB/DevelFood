import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  margin-top: ${screenHeight * 0.035}px;
  margin-bottom: ${screenHeight * 0.01}px;
  margin-left: ${screenWidth * 0.04}px;
  align-self: flex-start;
  font-size: ${fonts.XL}px;
  color: ${colors.black};
`;
