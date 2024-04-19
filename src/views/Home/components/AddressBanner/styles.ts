import styled from 'styled-components/native';
import {colors, fonts, screenHeight} from '../../../../globalStyles';

export const Container = styled.View`
  width: 100%;
  height: ${screenHeight * 0.1}px;
  background-color: ${colors.red};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  padding-left: 10px;
`;

export const AddressText = styled.Text`
  font-size: ${fonts.S}px;
  color: ${colors.white};
`;
