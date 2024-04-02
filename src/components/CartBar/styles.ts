import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${screenHeight * 0.13}px;
  border-radius: 8px;
  background-color: ${colors.red};
  margin: ${screenHeight * 0.015}px ${screenWidth * 0.042}px;
`;

export const CartContainer = styled.View`
  width: 20%;
  height: 100%;
`;

export const CartIcon = styled.Image`
  width: ${screenWidth * 0.053}px;
  height: ${screenHeight * 0.02299}px;
`;

export const QuantityContainer = styled.View`
  margin-left: -20px;
  margin-top: -${screenHeight * 0.01299}px;
  border-radius: 50px;
  background-color: ${colors.white};
  width: 12px;
  height: 12px;
`;

export const QuantityText = styled.Text`
  color: ${colors.red};
  font-size: 8px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;

export const Price = styled.Text`
  font-size: 12px;
  color: ${colors.white};
  font-weight: bold;
`;
