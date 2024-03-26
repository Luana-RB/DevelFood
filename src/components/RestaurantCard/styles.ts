import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';
import {Platform} from 'react-native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 173px;
  border-radius: 8px;
  background-color: ${colors.white};
  margin: 9px 17px;
`;

export const BackGroundImage = styled.ImageBackground`
  width: 100%;
  height: 127px;
  border-radius: 8px;
  margin-top: -46px;
`;

export const HeartContainer = styled.View`
  width: 42px;
  height: 42px;
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
  width: 25px;
  height: 22px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 69px;
  border-radius: 8px;
  flex-direction: column;
  padding: 12px;
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

export const Title = styled.Text`
  font-size: 18px;

  margin-bottom: 5px;
  color: ${colors.black};
`;

export const InfoFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const RatingIcon = styled.Image`
  width: 12px;
  height: 11px;
`;

export const RatingText = styled.Text`
  font-size: 14px;
  color: ${colors.red};
`;
