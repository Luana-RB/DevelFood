import styled from 'styled-components/native';
import {colors, fonts} from '../../../globalStyles';

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
`;

export const PersonIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 14px;
`;
export const CellphoneIcon = styled.Image`
  width: 21px;
  height: 25px;
  margin-left: 14px;
  margin-right: 14px;
`;
export const DocumentIcon = styled.Image`
  width: 29px;
  height: 20px;
  padding: 10px;
  margin: 10px;
`;
export const PinIcon = styled.Image`
  width: 11px;
  height: 30px;
  padding: 10px;
  margin: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const CadastroContainer = styled.View`
  width: 275px;
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
