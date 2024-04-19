import styled from 'styled-components/native';
import {colors, fonts, screenWidth} from '../../../globalStyles';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const CheckContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 70px;
  margin-top: 22px;
`;

export const CheckImage = styled.Image`
  width: 46px;
  height: 47px;
`;

export const LadyImage = styled.Image`
  align-self: center;
  width: 80px;
  height: 180px;
  margin-top: 6px;
  margin-bottom: 26px;
`;
export const BigLadyImage = styled.Image`
  align-self: center;
  width: 212px;
  height: 232px;
  margin-top: 80px;
  margin-bottom: 35px;
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  gap: 15px;
  width: ${screenWidth * 0.75}px;
  align-items: center;
  justify-content: center;
`;

export const CadastroContainer = styled.View`
  width: ${screenWidth * 0.7}px;
`;
export const CadastroTitle = styled.Text`
  font-size: ${fonts.XXL}px;
  color: ${colors.black};
  margin-bottom: 5px;
`;
export const CadastroText = styled.Text`
  font-size: ${fonts.XS}px;
  color: ${colors.gray};
  margin-bottom: 110px;
`;
