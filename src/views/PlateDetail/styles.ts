import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};

  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;

export const BodyContainer = styled.View`
  flex: 7;
  align-items: center;
`;

export const PlateImage = styled.Image`
  margin-bottom: ${screenHeight * 0.02}px;
  margin-top: ${screenHeight * 0.02}px;
  border-radius: 10px;
  width: ${screenWidth * 0.6}px;
  height: ${screenHeight * 0.25}px;
`;

export const HeaderContainer = styled.View`
  align-items: flex-start;
  width: ${screenWidth * 0.8}px;
  height: ${screenHeight * 0.05}px;
  margin-bottom: ${screenHeight * 0.05}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
`;

export const DescriptionContainer = styled.View`
  align-items: flex-start;
  width: ${screenWidth * 0.8}px;
  height: ${screenHeight * 0.12}px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${colors.black};
`;

export const RestaurantContainer = styled.View`
  border-radius: 6px;
  border-color: ${colors.lightGray};
  border-width: 1px;
  width: ${screenWidth * 0.85}px;
  height: ${screenHeight * 0.07}px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const RestaurantIcon = styled.Image`
  width: ${screenWidth * 0.042}px;
  height: ${screenHeight * 0.021}px;
  margin: 20px;
`;
export const RestaurantName = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
`;

export const FooterContainer = styled.View`
  flex: 1;
  width: ${screenWidth * 0.9999}px;
  height: ${screenHeight * 0.1}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${colors.red};
  border-radius: 8px 8px 0px 0px;
  margin-bottom: 0;
  padding: 15px 30px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-weight: bold;
`;
