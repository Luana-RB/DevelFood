import styled from 'styled-components/native';
import {
  colors,
  fonts,
  screenHeight,
  screenWidth,
} from '../../../../globalStyles';

export const Container = styled.View`
  width: ${screenWidth}px;
  align-items: flex-start;
`;

export const DateTitle = styled.Text`
  margin-left: ${screenWidth * 0.04}px;
  margin-bottom: -${screenHeight * 0.015}px;
  flex: 1;
  font-size: ${fonts.XS}px;
  color: ${colors.gray};
`;

export const BodyContainer = styled.View`
  width: 100%;
  flex: 1;
`;
