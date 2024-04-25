import styled from 'styled-components/native';
import {colors, fonts, screenWidth} from '../../globalStyles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  flex: 0.6;
  padding: 20px;
`;

export const AddressImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const AddressTextContainer = styled.View`
  align-items: flex-start;
  width: ${screenWidth * 0.5}px;
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

export const DateContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border-color: ${colors.red};
  border-width: 2px;
  background-color: ${colors.white};
`;
export const DateDay = styled.Text`
  color: ${colors.red};
  font-size: ${fonts.XL}px;
  font-weight: bold;
`;
export const DateMonth = styled.Text`
  color: ${colors.red};
  font-size: ${fonts.M}px;
`;

export const RestaurantContainer = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  flex: 0.5;
  padding: 20px;
`;
export const RestaurantImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 10px;
`;
export const RestaurantTextContainer = styled.View`
  align-items: flex-start;
  width: ${screenWidth * 0.5}px;
`;
export const RestaurantTitle = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.L}px;
`;
export const StatusContainer = styled.View`
  align-items: center;
  width: 85px;
`;

export const StatusBox = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-color: ${colors.black};
  border-width: 2px;
  background-color: ${colors.white};
`;
export const StatusText = styled.Text`
  color: ${colors.red};
  font-size: ${fonts.XXS}px;
  flex-wrap: wrap;
  text-align: center;
`;

export const Line = styled.View`
  background-color: ${colors.lightGray};
  width: 90%;
  height: 0.5%;
  align-self: center;
  border-radius: 6px;
  margin: 10px 0px 40px 0px;
`;
export const ItemContainer = styled.View`
  flex: 5;
  background-color: ${colors.lightGray};
  border-radius: 0px 80px 0px 0px;
  margin-left: -20px;
  height: 80%;
  width: 98%;
  align-items: center;
`;
export const FullPriceContainer = styled.View`
  background-color: ${colors.gray};
  border-radius: 8px;
  height: 60px;
  width: 150px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin: 20px 40px;
`;

export const FullPriceTitle = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.XXS}px;
`;
export const FullPriceText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.S}px;
`;
