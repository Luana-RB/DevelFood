import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../../globalStyles';
import {StyleSheet} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

export const BarContainer = styled.View`
  margin-top: ${screenHeight * 0.05}px;
  margin-bottom: ${screenHeight * 0.035}px;
  gap: 4px;
  flex-direction: row;
`;

export const BarImage = styled.Image`
  width: ${screenWidth * 0.21}px;
  height: ${screenHeight * 0.008}px;
`;

export const ForgotImage = styled.Image`
  width: ${screenWidth * 0.8}px;
  height: ${screenHeight * 0.24}px;
`;
export const LockImage = styled.Image`
  width: ${screenWidth * 0.384}px;
  height: ${screenHeight * 0.15}px;
`;
export const LockCheckedImage = styled.Image`
  width: ${screenWidth * 0.2}px;
  height: ${screenHeight * 0.14}px;
  margin-top: ${screenHeight * 0.06}px;
  margin-bottom: ${screenHeight * 0.155}px;
`;

export const MailImage = styled.Image`
  width: ${screenWidth * 0.384}px;
  height: ${screenHeight * 0.18}px;
  margin-top: ${screenHeight * 0.045}px;
  margin-bottom: ${screenHeight * 0.055}px;
`;

export const TextContainer = styled.View`
  width: ${screenWidth * 0.7}px;
  margin-top: ${screenHeight * 0.004}px;
  margin-bottom: ${screenHeight * 0.04}px;
  gap: ${screenHeight * 0.015}px;
`;

export const Title = styled.Text`
  font-size: ${fonts.XXL}px;
  font-weight: bold;
  color: ${colors.black};
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: ${fonts.XS}px;
  font-weight: bold;
  color: ${colors.gray};
  flex-wrap: wrap;
  text-align: center;
`;
export const CodeText = styled.Text`
  font-size: ${fonts.S}px;
  font-weight: bold;
  color: ${colors.black};
  flex-wrap: wrap;
  text-align: center;
`;

export const DigitsContainer = styled.View`
  width: ${screenWidth * 0.75}px;
  flex-direction: row;
  justify-content: space-evenly;
  margin: ${screenHeight * 0.008}px;
`;

export const styles = StyleSheet.create({
  digitsBox: {
    color: colors.black,
    width: screenHeight * 0.068,
    height: screenHeight * 0.068,
    borderRadius: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
});
