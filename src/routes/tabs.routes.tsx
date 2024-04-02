import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Favoritos from '../views/Favoritos';
import Perfil from '../views/Perfil';
import Pedidos from '../views/Pedidos';
import {colors, screenHeight} from '../globalStyles';
import {Image, Text} from 'react-native';
import {RestaurantStack} from './restaurant.routes';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        keyboardHidesTabBar: true,
        tabBarStyle: {height: screenHeight * 0.08, position: 'absolute'},
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Início') {
            if (focused) {
              size = size + screenHeight * 0.001;
              return <Image source={require('../../assets/images/home.png')} />;
            } else {
              return (
                <Image
                  source={require('../../assets/images/home_inactive.png')}
                />
              );
            }
          } else if (route.name === 'Favoritos') {
            if (focused) {
              size = size + screenHeight * 0.001;
              return (
                <Image
                  source={require('../../assets/images/heart.png')}
                  style={{width: size + screenHeight * 0.0044, height: size}}
                />
              );
            } else {
              return (
                <Image
                  source={require('../../assets/images/heart_inactive.png')}
                />
              );
            }
          } else if (route.name === 'Pedidos') {
            if (focused) {
              size = size + screenHeight * 0.001;
              return <Image source={require('../../assets/images/bars.png')} />;
            } else {
              return (
                <Image
                  source={require('../../assets/images/bars_inactive.png')}
                />
              );
            }
          } else if (route.name === 'Perfil') {
            if (focused) {
              size = size + screenHeight * 0.001;
              return <Image source={require('../../assets/images/user.png')} />;
            } else {
              return (
                <Image
                  source={require('../../assets/images/user_inactive.png')}
                />
              );
            }
          } else {
            return <Image source={require('../../assets/images/home.png')} />;
          }
        },
        tabBarLabel: ({focused}) => {
          if (!focused) {
            return (
              <Text
                style={{
                  color: colors.gray,
                  fontSize: 12,
                  marginBottom: 8,
                  marginTop: -8,
                }}>
                {route.name}
              </Text>
            );
          }
        },
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.gray,
      })}>
      <Tab.Screen
        name="Início"
        component={RestaurantStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          title: 'Favoritos',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.black,
            fontSize: 16,
          },
        }}
      />
      <Tab.Screen
        name="Pedidos"
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
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Configurações',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.black,
            fontSize: 16,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
