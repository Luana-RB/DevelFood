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
  padding: 14px;
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.15}px;
  border-radius: 10px;
  background-color: ${colors.lightGray};
  margin-top: 15px;
  margin-left: 16px;
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
  width: 40px;
  height: 40px;
  border-radius: 50px;
  align-self: flex-start;
`;
export const TextContainer = styled.View`
  margin-left: 13px;
  margin-top: 6px;
  flex: 7;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${fonts.S}px;
  color: ${colors.black};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
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
  font-size: ${fonts.XS}px;
  color: ${colors.gray};
  font-weight: bold;
  flex-wrap: wrap;
`;
