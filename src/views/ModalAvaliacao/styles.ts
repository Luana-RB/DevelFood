import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const BackGround = styled.View`
  height: ${screenHeight}px;
  width: ${screenWidth}px;
  background-color: rgba(43, 43, 46, 0.5);
  position: relative;
`;
export const Container = styled.View`
  height: ${screenHeight * 0.7}px;
  width: ${screenWidth}px;
  border-radius: 30px 30px 0px 0px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: flex-start;
  padding: ${screenHeight * 0.03}px;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${colors.black};
  margin: 10px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.Text`
  flex-wrap: wrap;
  font-size: 12px;
  color: ${colors.gray};
  margin-top: 8px;
`;
export const RestaurantName = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  font-weight: bold;
  margin-top: -20px;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin: 5px;
`;

export const InputBox = styled.View`
  height: ${screenHeight * 0.2}px;
  width: ${screenWidth * 0.8}px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${colors.gray};
  background-color: ${colors.white};
  padding: 5px;
  margin-top: -120px;
`;

export const InputText = styled.TextInput`
  color: ${colors.black};
  font-size: 12px;
`;
