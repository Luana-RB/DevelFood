import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.SafeAreaView`
  background-color: ${colors.white};
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.12}px;
  margin: ${screenHeight * 0.015}px ${screenWidth * 0.05}px;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderTextContainer = styled.View`
  justify-content: center;
  align-self: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${fonts.XL}px;
  color: ${colors.black};
`;
export const HeaderCategory = styled.Text`
  font-size: ${fonts.XS}px;
  color: ${colors.gray};
`;

export const HeaderLogo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const Line = styled.View`
  height: 2px;
  width: ${screenWidth * 0.95}px;
  background-color: ${colors.lightGray};
  align-self: center;
`;

export const BodyContainer = styled.View`
  flex: 6;
`;

export const PlatesTitle = styled.Text`
  font-size: ${fonts.L}px;
  color: ${colors.black};
  margin: ${screenHeight * 0.01}px ${screenWidth * 0.05}px;
`;
