import {StackScreenProps} from '@react-navigation/stack';
import {PlateData} from './restaurantData';

export type RootStackParamList = {
  PlateDetails: {plate: PlateData; restaurantId: string};
  Historico: any;
  Home: any;
  Favorites: any;
  RestaurantProfile: {restaurantId: any};
  CartPage: any;
  CheckoutRequest: {requestId: string};
  RequestDetail: {requestId: string};
  Modal: any;
  Profile: any;
  EditarPerfil: any;
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
