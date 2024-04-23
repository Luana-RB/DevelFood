import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  PlateDetails: {plate: any; restaurant: any};
  Home: any;
  RestaurantProfile: {restaurantId: any};
  CartPage: any;
};

export type PlateDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'PlateDetails'
>;
export type RestaurantProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'RestaurantProfile'
>;
