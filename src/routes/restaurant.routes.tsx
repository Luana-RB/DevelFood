import {createStackNavigator} from '@react-navigation/stack';
import RestaurantProfile from '../views/RestaurantProfile';
import {RestaurantProvider} from '../services/context/restaurantContext';
import Home from '../views/Home';
import React from 'react';
import PlateDetail from '../views/PlateDetail';
import {RootStackParamList} from '../types/restaurantData';
import {CustomHeartButton} from '../components/CustomHeartButton';

const Stack = createStackNavigator<RootStackParamList>();

export function RestaurantStack() {
  return (
    <RestaurantProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RestaurantProfile"
          component={RestaurantProfile}
          options={({route}) => ({
            title: '',
            headerRight: () => <CustomHeartButton route={route} />,
          })}
        />
        <Stack.Screen
          name="PlateDetails"
          component={PlateDetail}
          options={({route}) => ({
            title: '',
            headerRight: () => <CustomHeartButton route={route} />,
          })}
        />
      </Stack.Navigator>
    </RestaurantProvider>
  );
}
