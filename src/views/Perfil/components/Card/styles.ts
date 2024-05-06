import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, fonts, screenHeight} from '../../../../globalStyles';

export const Container = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  height: ${screenHeight * 0.08}px;
  background-color: ${colors.white};
  flex-direction: row;
  ${Platform.OS === 'ios'
    ? `
    shadow-color: #000;
    shadow-offset: 0 2;
    shadow-opacity: 0.8;
    shadow-radius: 2;
 `
    : `
    elevation: 4;
 `}
  align-items: center;
  justify-content: flex-start;
  padding: ${screenHeight * 0.015}px;
`;

export const Text = styled.Text`
  color: ${colors.gray};
  font-size: ${fonts.M}px;
  margin-left: ${screenHeight * 0.03}px;
`;
