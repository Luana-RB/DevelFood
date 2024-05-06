import styled from 'styled-components/native';
import {colors, screenWidth} from '../../globalStyles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

export const Photo = styled.Image`
  border-radius: 100px;
  border-color: ${colors.red};
  border-width: 2px;
  width: 150px;
  height: 150px;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${colors.white};
  border-color: ${colors.red};
  border-width: 2px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${screenWidth * 0.6}px;
  top: 100px;
`;
