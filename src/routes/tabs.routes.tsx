import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favoritos from '../views/Favoritos';
import Perfil from '../views/Perfil';
import Pedidos from '../views/Pedidos';
import {colors, screenHeight} from '../globalStyles';
import {Text} from 'react-native';
import {HomeStack} from './home.routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CartProvider} from '../services/context/cartContext';
import {CustomArrowButton} from '../components/CustomArrowButton';
import {FavoritesStack} from './favorites.routes';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <CartProvider>
      <Tab.Navigator
        screenOptions={({route}) => ({
          keyboardHidesTabBar: true,
          tabBarStyle: {height: screenHeight * 0.08, position: 'absolute'},
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Início') {
              if (focused) {
                size = size + screenHeight * 0.001;
                return <Icon name="home" size={35} color={colors.red} />;
              } else return <Icon name="home" size={30} color={colors.gray} />;
            } else if (route.name === 'Favoritos') {
              if (focused) {
                size = size + screenHeight * 0.001;
                return <Icon name="heart" size={35} color={colors.red} />;
              } else return <Icon name="heart" size={30} color={colors.gray} />;
            } else if (route.name === 'Pedidos') {
              if (focused) {
                size = size + screenHeight * 0.001;
                return <Icon name="menu" size={35} color={colors.red} />;
              } else return <Icon name="menu" size={30} color={colors.gray} />;
            } else if (route.name === 'Perfil') {
              if (focused) {
                size = size + screenHeight * 0.001;
                return <Icon name="account" size={35} color={colors.red} />;
              } else
                return <Icon name="account" size={30} color={colors.gray} />;
            } else return <Icon name="home" size={30} color={colors.gray} />;
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
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Favoritos"
          component={FavoritesStack}
          options={{headerShown: false}}
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
    </CartProvider>
  );
}

export default HomeTabs;
