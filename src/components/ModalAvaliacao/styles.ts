import styled from 'styled-components/native';
import {colors, fonts, screenHeight, screenWidth} from '../../globalStyles';
import {StyleSheet} from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  height: ${screenHeight * 0.7}px;
  width: ${screenWidth}px;
  border-radius: 30px 30px 0px 0px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  padding: ${screenHeight * 0.03}px;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.Text`
  font-size: ${fonts.XXL}px;
  color: ${colors.black};
  margin: 10px;
`;

export const DescriptionContainer = styled.Text`
  font-size: ${fonts.XS}px;
`;

export const Description = styled.Text`
  color: ${colors.gray};
  margin-top: 8px;
`;
export const RestaurantName = styled.Text`
  color: ${colors.black};
`;

export const ListContainer = styled.View`
  height: ${screenHeight * 0.1}px;
  margin: ${screenHeight * 0.005}px;
  margin-top: ${screenHeight * 0.03}px;
`;

export const InputBox = styled.View`
  height: ${screenHeight * 0.2}px;
  width: ${screenWidth * 0.8}px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${colors.gray};
  background-color: ${colors.white};
  padding-left: 5px;
`;

export const InputText = styled.TextInput`
  color: ${colors.black};
  font-size: ${fonts.XS}px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight * 0.7,
    width: screenWidth,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: screenHeight * 0.03,
    position: 'absolute',
    bottom: 0,
  },
});
