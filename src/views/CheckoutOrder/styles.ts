import styled from 'styled-components/native';
import {colors, fonts} from '../../globalStyles';

export const Container = styled.SafeAreaView`
  background-color: ${colors.white};
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 90px;
  padding-bottom: 90px;
`;

export const Title = styled.Text`
  font-size: ${fonts.XXL}px;
  color: ${colors.black};
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
`;

export const Text = styled.Text`
  font-size: ${fonts.S}px;
  color: ${colors.gray};
  flex-wrap: wrap;
`;
