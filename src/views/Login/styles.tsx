import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const BackGroundImagesContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Sandwich = styled.Image`
  align-self: flex-start;
  width: ${screenWidth * 0.65}px;
  height: ${screenHeight * 0.45}px;
  margin-left: -${screenWidth * 0.3}px;
  margin-top: -${screenHeight * 0.07}px;
`;
export const Pizza = styled.Image`
  align-self: flex-start;
  width: ${screenWidth * 0.7}px;
  height: ${screenHeight * 0.57}px;
  margin-left: ${screenWidth * 0.2}px;
  margin-top: -${screenHeight * 0.08}px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -${screenHeight * 0.11}px;
  margin-bottom: ${screenHeight * 0.01}px;
  padding: 5px;
`;
export const LogoImage = styled.Image`
  width: ${screenWidth * 0.16}px;
  height: ${screenHeight * 0.075}px;
  margin-right: ${screenWidth * 0.015}px;
`;

export const LogoText = styled.Text`
  font-family: Mogra-Regular;
  font-size: 18px;
  color: ${colors.red};
`;

export const ForgotPassText = styled.Text`
  font-family: Roboto-Bold;
  font-weight: bold;
  color: ${colors.brown};
  font-size: 12px;
`;

export const Pepper = styled.ImageBackground`
  width: ${screenWidth * 1.3}px;
  height: ${screenHeight * 0.4}px;
  margin-top: -${screenHeight * 0.02}px;
  margin-left: -${screenWidth * 0.18}px;
`;

export const SignInContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${screenHeight * 0.01}px;
  margin-left: ${screenWidth * 0.1}px;
`;

export const SignInText = styled.Text`
  color: ${colors.black};
  font-family: Roboto-Bold;
  font-size: 12px;
  font-weight: bold;
`;

export const SignInButtonText = styled.Text`
  color: ${colors.red};
  font-family: Roboto-Bold;
  font-weight: bold;
  font-size: 12px;
  margin-left: 5px;
`;
