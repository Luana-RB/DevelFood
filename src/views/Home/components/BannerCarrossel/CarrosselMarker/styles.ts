import {StyleSheet} from 'react-native';
import {screenWidth} from '../../../../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 15,
    width: screenWidth * 0.04,
  },
  dot: {
    borderRadius: 20,
    marginHorizontal: 5,
  },
});
