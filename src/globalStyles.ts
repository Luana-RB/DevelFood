import {Dimensions} from 'react-native';
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const colors = {
  red: '#C20C18',
  black: '#2B2B2E',
  white: '#FFFFFF',
  brown: '#68484a',
  gray: '#bfbaba',
  lightGray: '#F0F0F5',
  lowOpacity: 'rgba(43, 43, 46, 0.5)',
  yellow: '#eccc50',
};

export const fonts = {
  XXL: screenHeight * 0.032,
  XL: screenHeight * 0.025,
  L: screenHeight * 0.022,
  M: screenHeight * 0.02,
  S: screenHeight * 0.018,
  XS: screenHeight * 0.017,
  XXS: screenHeight * 0.015,
};
