import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../../../../globalStyles';

export const Container = styled.TouchableOpacity`
  width: ${screenWidth * 0.92}px;
  height: ${screenHeight * 0.26}px;
  background-color: ${colors.white};
  margin-right: 8px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Banner = styled.View`
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.2}px;
  margin: 12px 8px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
