import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: ${screenWidth * 0.91}px;
  height: ${screenHeight * 0.07}px;
  border-radius: 10px;
  border-color: ${colors.gray};
  border-width: 1px;
  background-color: ${colors.white};
  margin: ${screenHeight * 0.015}px ${screenWidth * 0.042}px;
`;

export const Icon = styled.Image`
  width: ${screenWidth * 0.05}px;
  height: ${screenHeight * 0.023}px;
  margin: ${screenWidth * 0.04}px;
`;

export const Title = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: ${colors.gray};
`;
