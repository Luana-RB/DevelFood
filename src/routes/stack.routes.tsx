import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import {UsersData} from '../types/userData';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserById} from '../services/api/users';
import {Image, Text, View} from 'react-native';
import {colors} from '../globalStyles';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../services/context/authContext';
import Cadastro from '../views/Cadastro';
import ForgotPasswordStack from './newPassword.routes';
import HomeTabs from './tabs.routes';

const MainStack = createStackNavigator();

export function MyStack() {
  const [userData, setUserData] = useState<UsersData | null | undefined>(null);

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
      signIn: async (foundUser: UsersData) => {
        const userToken = String(foundUser.credentials.id);

        setUserData(foundUser);

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGIN', id: userToken});
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          setUserData(null);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGOUT', id: undefined});
      },

      userData: userData,
    }),
    [userData],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          const userData = await getUserById(userToken);
          setUserData(userData);
        }
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
