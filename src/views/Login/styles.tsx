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
  width: 180px;
  height: 323px;
  margin-left: -80px;
  margin-top: -47px;
`;
export const Pizza = styled.Image`
  align-self: flex-start;
  width: 300px;
  height: 409px;
  margin-left: 97px;
  margin-top: -56px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -90px;
  margin-bottom: 8px;
  gap: 10px;
  padding: 5px;
`;
export const LogoImage = styled.Image`
  width: 52px;
  height: 50px;
`;

export const LogoText = styled.Text`
  font-family: Mogra-Regular;
  font-size: 18px;
  color: ${colors.red};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 295px;
  height: 45px;
  border-width: 1px;
  border-color: ${colors.gray};
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const InputIcon = styled.Image`
  padding: 10px;
  margin: 10px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 14px;
`;

export const ForgotPassText = styled.Text`
  font-family: Roboto-Bold;
  font-weight: bold;
  color: ${colors.brown};
  font-size: 12px;
`;

export const Pepper = styled.ImageBackground`
  width: 670px;
  height: 446px;
  margin-top: -${screenHeight * 0.02}px;
  margin-left: -148px;
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
