import styled from 'styled-components/native';
import {colors, screenHeight} from '../../../../globalStyles';

export const Container = styled.View`
  width: 100%;
  height: ${screenHeight * 0.26}px;
  background-color: ${colors.white};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Banner = styled.TouchableOpacity`
  width: 92%;
  height: ${screenHeight * 0.2}px;
  margin: 12px 8px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Carroussel = styled.View`
  width: 100%;
  height: ${screenHeight * 0.03}px;
  margin-top: -8px;
`;
