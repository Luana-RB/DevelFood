import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const NoResultContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  height: ${screenHeight * 0.5}px;
  padding: 20px;
`;

export const NoResultImage = styled.Image`
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.25}px;
`;

export const NoResultText = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  margin: 20px;
`;
