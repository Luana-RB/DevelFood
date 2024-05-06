import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import PlateDetail from '../views/PlateDetail';
import {CustomHeartButton} from '../components/CustomHeartButton';
import {RootStackParamList} from '../types/routeTypes';
import Favoritos from '../views/Favoritos';
import {CustomArrowButton} from '../components/CustomArrowButton';
import {colors} from '../globalStyles';

const Stack = createStackNavigator<RootStackParamList>();

export function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favoritos}
        options={({navigation}) => ({
          title: 'Favoritos',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.black,
            fontSize: 16,
          },
          headerLeft: () => <CustomArrowButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="PlateDetails"
        component={PlateDetail}
        options={({route, navigation}) => ({
          title: '',
          headerRight: () => <CustomHeartButton route={route} />,
          headerLeft: () => <CustomArrowButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
