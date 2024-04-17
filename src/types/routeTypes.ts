import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  PlateDetails: {plate: any; restaurantId: any};
  Home: any;
  Favorites: any;
  RestaurantProfile: {restaurantId: any};
};

export type PlateDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'PlateDetails'
>;
export type RestaurantProfileScreenProps = StackScreenProps<
  RootStackParamList,
  'RestaurantProfile'
>;
