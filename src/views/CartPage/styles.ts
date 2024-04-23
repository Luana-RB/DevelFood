import styled from 'styled-components/native';
import {colors, fonts, screenHeight} from '../../globalStyles';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
export const AddressContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0.6;
  padding: 20px;
`;
export const AddressImage = styled.Image`
  width: 60px;
  height: 60px;
`;
export const AddressTextContainer = styled.View`
  align-items: flex-start;
  width: 70%;
`;
export const Subtitle = styled.Text`
  color: ${colors.gray};
  font-size: ${fonts.XXS}px;
`;

export const AddressTitle = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.S}px;
`;
export const AddressSubtitle = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.XS}px;
`;
export const Line = styled.View`
  background-color: ${colors.lightGray};
  width: 90%;
  height: 0.5%;
  align-self: center;
  border-radius: 6px;
`;
export const RestaurantContainer = styled.View`
  flex: 0.6;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;
export const RestaurantTextContainer = styled.View``;
export const RestaurantTitle = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.L}px;
`;
export const RestaurantSubtitle = styled.Text`
  color: ${colors.gray};
  font-size: ${fonts.S}px;
`;
export const RestaurantImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;
export const ItemContainer = styled.View`
  flex: 5;
  background-color: ${colors.lightGray};
  border-radius: 80px 0px 0px 0px;
  margin-left: 30px;
  height: 80%;
  width: 98%;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.L}px;
  margin: 15px;
`;
export const EndOrderBarContainer = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${screenHeight * 0.1}px;
  margin-top: ${screenHeight * 0.76}px;
  background-color: ${colors.white};
  position: absolute;
`;

export const EndOrderBar = styled.View`
  width: 95%;
  height: ${screenHeight * 0.06}px;
  border-radius: 8px;
  background-color: ${colors.red};
  flex-direction: row;
  padding: 0px 15px;
  align-items: center;
`;
export const EndOrderText = styled.Text`
  font-size: ${fonts.S}px;
  color: ${colors.white};
  margin-left: 37%;
`;
export const Price = styled.Text`
  font-size: ${fonts.XS}px;
  color: ${colors.white};
  font-weight: bold;
`;
