import styled from 'styled-components/native';
import {colors, fonts, screenHeight} from '../../globalStyles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
export const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding: ${screenHeight * 0.03}px;
`;

export const Photo = styled.Image`
  width: ${screenHeight * 0.09}px;
  height: ${screenHeight * 0.09}px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${colors.lightGray};
`;
export const HeaderTextContainer = styled.View`
  margin-left: ${screenHeight * 0.03}px;
  align-items: flex-start;
  justify-content: center;
  gap: ${screenHeight * 0.013}px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-size: ${fonts.S}px;
`;

export const EditButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const EditText = styled.Text`
  color: ${colors.gray};
  font-size: ${fonts.XS}px;
`;

export const BodyContainer = styled.View`
  flex: 8;
  background-color: ${colors.white};
`;
