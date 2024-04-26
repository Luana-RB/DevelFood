import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  PlateDetails: {plate: any; restaurant: any};
  Historico: any;
  Home: any;
  Favorites: any;
  RestaurantProfile: {restaurantId: any};
  CartPage: any;
  CheckoutRequest: {requestId: string};
  RequestDetail: {requestId: string};
};

export type PlateDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'PlateDetails'
>;
export type RestaurantProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'RestaurantProfile'
>;
export type CheckoutRequestScreenProps = StackScreenProps<
  RootStackParamList,
  'CheckoutRequest'
>;
export type RequestDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'RequestDetail'
>;
