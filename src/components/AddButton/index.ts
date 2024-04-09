import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

export const AddButton = styled.TouchableOpacity`
  height: ${screenHeight * 0.03}px;
  width: ${screenWidth * 0.2}px;
  align-items: center;
  justify-content: flex-start;
`;

export const AddText = styled.Text`
  font-size: 14px;
  color: ${colors.red};
  font-weight: bold;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  height: ${screenHeight * 0.045}px;
  width: ${screenWidth * 0.2}px;
  align-items: center;
  justify-content: center;
  margin-top: -7px;
`;

export const QuantityBox = styled.View`
  width: ${screenWidth * 0.053}px;
  height: ${screenHeight * 0.025}px;
  background-color: ${colors.red};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${colors.red};
  align-items: center;
  justify-content: flex-start;
`;

export const QuantityText = styled.Text`
  font-size: 10px;
  color: ${colors.white};
`;
export const QuantityButton = styled.TouchableOpacity`
  height: 60%;
  width: 20%;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
`;

export const MinusIcon = styled.Image`
  width: ${screenWidth * 0.03}px;
  height: ${screenHeight * 0.006}px;
`;
export const PlusIcon = styled.Image`
  width: ${screenWidth * 0.03}px;
  height: ${screenHeight * 0.015}px;
`;
export const TrashIcon = styled.Image`
  width: ${screenWidth * 0.028}px;
  height: ${screenHeight * 0.016}px;
`;
