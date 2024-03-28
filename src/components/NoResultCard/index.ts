import styled from 'styled-components/native';
import {colors} from '../../globalStyles';

export const NoResultContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const NoResultImage = styled.Image`
  width: 100%;
  height: 70%;
`;

export const NoResultText = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  margin: 20px;
`;
