import {StyleSheet} from 'react-native';
import {colors, screenHeight} from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  cartContainer: {
    backgroundColor: colors.white,
    height: screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
