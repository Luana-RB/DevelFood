import {createStackNavigator} from '@react-navigation/stack';
import RestaurantProfile from '../views/RestaurantProfile';
import Home from '../views/Home';
import React from 'react';
import PlateDetail from '../views/PlateDetail';
import {CustomHeartButton} from '../components/CustomHeartButton';
import {RootStackParamList} from '../types/routeTypes';

const Stack = createStackNavigator<RootStackParamList>();

export function HomeStack() {
  return (
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
  );
}
