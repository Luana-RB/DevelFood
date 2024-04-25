import styled from 'styled-components/native';
import {
  colors,
  fonts,
  screenHeight,
  screenWidth,
} from '../../../../globalStyles';
import {Platform} from 'react-native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${screenWidth * 0.032}px;
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.15}px;
  border-radius: 10px;
  margin-top: ${screenHeight * 0.03}px;
  margin-left: ${screenWidth * 0.04}px;
  background-color: ${colors.lightGray};
  ${Platform.OS === 'ios'
    ? `
    shadow-color: #000;
    shadow-offset: 0 2;
    shadow-opacity: 0.8;
    shadow-radius: 2;
 `
    : `
    elevation: 10;
 `}
`;

export const Logo = styled.Image`
  width: ${screenWidth * 0.1}px;
  height: ${screenWidth * 0.1}px;
  align-self: flex-start;
  border-radius: 50px;
`;
export const TextContainer = styled.View`
  margin-left: ${screenWidth * 0.03}px;
  margin-top: ${screenHeight * 0.01}px;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 7;
`;

export const Title = styled.Text`
  font-size: ${fonts.S}px;
  color: ${colors.black};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: ${screenWidth * 0.04}px;
`;

export const StatusText = styled.Text`
  font-size: ${fonts.XS}px;
  color: ${colors.gray};
`;
export const OrderNumber = styled.Text`
  font-size: ${fonts.XS}px;
  color: ${colors.gray};
`;
export const OrderText = styled.Text`
  flex-wrap: wrap;
  font-size: ${fonts.XS}px;
  color: ${colors.gray};
  font-weight: bold;
`;
