import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../types/routeTypes';
import {colors} from '../globalStyles';
import Perfil from '../views/Perfil';
import Home from '../views/Home';
import EditarPerfil from '../views/EditarPerfil';

const Stack = createStackNavigator<RootStackParamList>();

export function PerfilStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Perfil}
        options={{
          title: 'Configurações',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.black,
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: colors.white,
          },
        }}
      />
      <Stack.Screen
        name="EditarPerfil"
        component={EditarPerfil}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
