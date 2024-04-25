import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.SafeAreaView`
  background-color: ${colors.white};
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: ${screenHeight * 0.1}px;
  padding-bottom: ${screenHeight * 0.2}px;
`;

export const Title = styled.Text`
  font-size: ${fonts.XXL}px;
  color: ${colors.black};
`;

export const Image = styled.Image`
  width: ${screenWidth * 0.7}px;
  height: ${screenHeight * 0.35}px;
`;

export const Text = styled.Text`
  width: ${screenWidth * 0.7}px;
  font-size: ${fonts.S}px;
  color: ${colors.gray};
  flex-wrap: wrap;
`;
