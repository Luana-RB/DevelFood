import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  PlateDetails: {plate: any; restaurant: any};
  Home: any;
  RestaurantProfile: {restaurantId: any};
  CartPage: any;
  CheckoutOrder: {orderId: string};
};

export type PlateDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'PlateDetails'
>;
export type RestaurantProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'RestaurantProfile'
>;
export type CheckoutOrderScreenProps = StackScreenProps<
  RootStackParamList,
  'CheckoutOrder'
>;
