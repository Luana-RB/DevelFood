import {createStackNavigator} from '@react-navigation/stack';
import RestaurantProfile from '../views/RestaurantProfile';
import Home from '../views/Home';
import React from 'react';
import PlateDetail from '../views/PlateDetail';
import {CustomHeartButton} from '../components/CustomHeartButton';
import {CartProvider} from '../services/context/cartContext';
import {RootStackParamList} from '../types/routeTypes';
import CartPage from '../views/CartPage';
import {colors} from '../globalStyles';
import {CustomCloseButton} from '../components/CustomCloseButton';
import CheckoutRequest from '../views/CheckoutRequest';
import RequestDetail from '../views/RequestDetail';

const Stack = createStackNavigator<RootStackParamList>();

export function RestaurantStack() {
  return (
    <CartProvider>
      <Stack.Navigator initialRouteName="Home">
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
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={({navigation}) => ({
            title: 'Compras',
            headerStyle: {backgroundColor: colors.red},
            headerTitleStyle: {color: colors.white},
            headerTitleAlign: 'center',
            headerLeft: () => (
              <CustomCloseButton handleSubmit={() => navigation.pop()} />
            ),
          })}
        />
        <Stack.Screen
          name="CheckoutRequest"
          component={CheckoutRequest}
          options={({navigation}) => ({
            title: 'Checkout',
            headerStyle: {backgroundColor: colors.red},
            headerTitleStyle: {color: colors.white},
            headerTitleAlign: 'center',
            headerLeft: () => (
              <CustomCloseButton handleSubmit={() => navigation.popToTop()} />
            ),
          })}
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
    </CartProvider>
  );
}
