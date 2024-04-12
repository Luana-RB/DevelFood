import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../globalStyles';
import {Platform, StyleSheet} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  width: ${screenWidth * 0.9}px;
  height: ${screenHeight * 0.18}px;
  border-radius: 8px;
  background-color: ${colors.white};
  margin: ${screenHeight * 0.015}px ${screenWidth * 0.042}px;
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

export const PlateImage = styled.Image`
  width: ${screenHeight * 0.145}px;
  height: ${screenHeight * 0.135}px;
  border-radius: 8px;
  overflow: hidden;
  margin: ${screenWidth * 0.03}px;
`;

export const BodyContainer = styled.View`
  width: 60%;
  height: 100%;
  flex-direction: column;
  padding: ${screenHeight * 0.017}px;
  margin-left: -${screenWidth * 0.02}px;
`;
export const TextContainer = styled.View`
  width: 100%;
  height: ${screenHeight * 0.09}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const TitleContainer = styled.View`
  width: 100%;
  align-self: center;
  margin-bottom: ${screenHeight * 0.005}px;
`;
export const Title = styled.Text`
  font-size: ${fonts.M}px;
  flex-wrap: wrap;
  color: ${colors.red};
  font-weight: bold;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  align-self: center;
`;
export const Description = styled.Text`
  font-size: ${fonts.XXS}px;
  flex-wrap: wrap;
  color: ${colors.gray};
`;

export const FooterContainer = styled.View`
  margin-top: 15%;
  flex-direction: row;
  justify-content: space-between;
  justify-self: flex-end;
`;

export const Price = styled.Text`
  font-size: ${fonts.XS}px;
  color: ${colors.black};
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  heartIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 0,
    margin: 10,
  },
});
