import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';
import {Platform} from 'react-native';

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

export const HeartIcon = styled.Image`
  width: ${screenWidth * 0.056}px;
  height: ${screenHeight * 0.024}px;
  align-self: flex-end;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  margin: 10px;
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
  font-size: 16px;
  flex-wrap: wrap;
  color: ${colors.red};
  font-weight: bold;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  align-self: center;
`;
export const Description = styled.Text`
  font-size: 10px;
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
  font-size: 12px;
  color: ${colors.black};
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  height: 100%;
  width: ${screenWidth * 0.2}px;
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
  height: ${screenHeight * 0.02299}px;
  background-color: ${colors.red};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const QuantityText = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;
export const QuantityButton = styled.TouchableOpacity`
  height: 50%;
  width: 20%;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
`;

export const MinusIcon = styled.Image`
  width: ${screenWidth * 0.02}px;
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
