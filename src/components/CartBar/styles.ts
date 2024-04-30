import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 15px;
  align-items: center;
  width: 95%;
  height: ${screenHeight * 0.05}px;
  border-radius: 8px;
  background-color: ${colors.red};
`;

export const CartContainer = styled.View`
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${screenHeight * 0.01}px;
`;

export const QuantityContainer = styled.View`
  margin-left: 20px;
  margin-top: -${screenHeight * 0.035}px;
  border-radius: 50px;
  background-color: ${colors.white};
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
`;

export const QuantityText = styled.Text`
  color: ${colors.red};
  font-size: 7px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: ${fonts.S}px;
  color: ${colors.white};
`;

export const Price = styled.Text`
  font-size: ${fonts.XS}px;
  color: ${colors.white};
  font-weight: bold;
`;
