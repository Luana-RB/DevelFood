import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../../../globalStyles';

export const Container = styled.View`
  width: 100%;
  height: ${screenHeight * 0.1}px;
  background-color: ${colors.red};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
`;

export const AddressText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
`;

export const Icon = styled.Image`
  width: ${screenWidth * 0.08}px;
  height: ${screenHeight * 0.04}px;
  margin: 13px;
`;
