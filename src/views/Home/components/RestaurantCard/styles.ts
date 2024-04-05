import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../../../globalStyles';
import {Platform} from 'react-native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: ${screenWidth * 0.412}px;
  height: ${screenHeight * 0.23}px;
  border-radius: 8px;
  background-color: ${colors.white};
  margin: ${screenHeight * 0.015}px ${screenWidth * 0.042}px;
`;

export const BackGroundImage = styled.ImageBackground`
  width: 100%;
  height: ${screenHeight * 0.17}px;
  border-radius: 8px;
  margin-top: -${screenHeight * 0.058}px;
  overflow: hidden;
`;

export const HeartContainer = styled.View`
  width: ${screenWidth * 0.1}px;
  height: ${screenHeight * 0.05}px;
  align-self: flex-end;
  border-radius: 0px 8px 0px 16px;
  border-width: 1px;
  background-color: ${colors.white};
  border-color: ${colors.gray};
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 0;
`;

export const HeartImage = styled.Image`
  width: ${screenWidth * 0.053}px;
  height: ${screenHeight * 0.02299}px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: ${screenHeight * 0.095}px;
  border-radius: 8px;
  flex-direction: column;
  padding: ${screenHeight * 0.012}px;
  position: absolute;
  z-index: 1;
  background-color: ${colors.white};
  bottom: 0;
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
export const TitleContainer = styled.View`
  width: 100%;
  max-height: 60%;
  flex-shrink: 1;
`;
export const Title = styled.Text`
  flex-shrink: 1;
  font-size: 16px;
  flex-wrap: wrap;
  margin-bottom: ${screenHeight * 0.005}px;
  color: ${colors.black};
`;

export const InfoFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const RatingIcon = styled.Image`
  width: ${screenWidth * 0.03}px;
  height: ${screenHeight * 0.0132}px;
`;

export const RatingText = styled.Text`
  font-size: 12px;
  color: ${colors.red};
`;
