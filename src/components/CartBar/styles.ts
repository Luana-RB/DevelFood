import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 15px;
  align-items: center;
  align-self: center;
  width: 95%;
  height: ${screenHeight * 0.05}px;
  border-radius: 8px;
  background-color: ${colors.red};
  margin-top: -70px;
`;

export const CartContainer = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const CartIcon = styled.Image`
  margin-top: -${screenHeight * 0.01299}px;
  width: ${screenWidth * 0.053}px;
  height: ${screenHeight * 0.02299}px;
`;

export const QuantityContainer = styled.View`
  margin-left: 20px;
  margin-top: -${screenHeight * 0.025}px;
  border-radius: 50px;
  background-color: ${colors.white};
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
`;

export const QuantityText = styled.Text`
  color: ${colors.red};
  font-size: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.white};
`;

export const Price = styled.Text`
  font-size: 12px;
  color: ${colors.white};
  font-weight: bold;
`;
