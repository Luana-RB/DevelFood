import styled from 'styled-components/native';
import {colors, screenHeight, screenWidth} from '../../globalStyles';
import {StyleSheet} from 'react-native';
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${screenWidth * 0.75}px;
  height: ${screenHeight * 0.06}px;
  border-width: 1px;
  border-color: ${colors.gray};
  border-radius: 10px;
  margin-bottom: ${screenWidth * 0.02}px;
`;

export const InputIcon = styled.Image`
  padding: 10px;
  margin: 10px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: ${colors.black};
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  color: ${colors.red};
  margin-top: -8px;
  margin-bottom: 2px;
`;

export const inputStyles = StyleSheet.create({
  InputText: {
    flex: 1,
    fontSize: 14,
  },
});
