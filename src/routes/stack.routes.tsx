import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, Text, View} from 'react-native';
import {colors} from '../globalStyles';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../services/context/authContext';
import Cadastro from '../views/Cadastro';
import ForgotPasswordStack from './newPassword.routes';
import HomeTabs from './tabs.routes';

const MainStack = createStackNavigator();

export function MyStack() {
  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };

  const loginReducer = (prevState: any, action: {type: any; id: any}) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.id,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,

          userToken: action.id,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,

          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,

          userToken: action.id,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (token: string) => {
        try {
          await AsyncStorage.setItem('userToken', token);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGIN', id: token});
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGOUT', id: undefined});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }

      dispatch({type: 'RETRIEVE_TOKEN', id: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.red,
        }}>
        <Image source={require('../../assets/images/dfLogo.png')} />
        <Text
          style={{
            fontFamily: 'Mogra-Regular',
            fontSize: 24,
            color: colors.white,
          }}>
          DEVELFOOD
        </Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <MainStack.Navigator>
          {loginState.userToken !== null ? (
            <MainStack.Screen
              name="Home"
              component={HomeTabs}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <MainStack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <MainStack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="Recuperar Senha"
                component={ForgotPasswordStack}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
        </MainStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
