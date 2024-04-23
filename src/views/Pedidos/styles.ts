import styled from 'styled-components/native';
import {colors, fonts} from '../../globalStyles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: ${fonts.XL}px;
  color: ${colors.black};
  align-self: flex-start;
  margin-left: 16px;
`;
