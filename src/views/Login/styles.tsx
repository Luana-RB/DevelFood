import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
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
  color: #c20c18;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 295px;
  height: 45px;
  border-width: 1px;
  border-color: #bfbaba;
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
  color: #68484a;
  font-size: 12px;
`;

export const Pepper = styled.ImageBackground`
  width: 400px;
  height: 300px;
  margin-top: -35px;
`;

export const SignInContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;
`;

export const SignInText = styled.Text`
  color: #000;
  font-family: Roboto-Bold;
  font-size: 12px;
  font-weight: bold;
`;

export const SignInButtonText = styled.Text`
  color: #c20c18;
  font-family: Roboto-Bold;
  font-weight: bold;
  font-size: 12px;
  margin-left: 5px;
`;
