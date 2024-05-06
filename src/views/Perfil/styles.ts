import styled from 'styled-components/native';
import {colors, fonts} from '../../globalStyles';

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
  padding: 20px;
`;

export const Photo = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${colors.lightGray};
`;
export const HeaderTextContainer = styled.View`
  margin-left: 24px;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
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

export const Line = styled.View`
  background-color: ${colors.lightGray};
  width: 90%;
  height: 0.5%;
  align-self: center;
  border-radius: 6px;
  margin: 10px 0px 40px 0px;
`;
