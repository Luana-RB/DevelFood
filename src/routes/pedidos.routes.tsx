import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../types/routeTypes';
import {colors} from '../globalStyles';
import {CustomCloseButton} from '../components/CustomCloseButton';
import RequestDetail from '../views/RequestDetail';
import Pedidos from '../views/Pedidos';

const Stack = createStackNavigator<RootStackParamList>();

export function PedidosStack() {
  return (
    <Stack.Navigator initialRouteName="Historico">
      <Stack.Screen
        name="Historico"
        component={Pedidos}
        options={{
          title: 'Meus Pedidos',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.white,
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: colors.red,
          },
        }}
      />
      <Stack.Screen
        name="RequestDetail"
        component={RequestDetail}
        options={({navigation, route}) => ({
          title: `Pedido Nº ${route.params.requestId}`,
          headerStyle: {backgroundColor: colors.red},
          headerTitleStyle: {color: colors.white},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <CustomCloseButton handleSubmit={() => navigation.goBack()} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
