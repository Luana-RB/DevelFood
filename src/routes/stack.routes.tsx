import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';
import Login, {UsersData} from '../views/Login';
import Cadastro from '../views/Cadastro';
import RecuperarSenha from '../views/RecuperarSenha';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserById} from '../services/users';
import {Image, Text, View} from 'react-native';
import {colors} from '../globalStyles';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../services/authContext';

const Stack = createStackNavigator();

export function MyStack() {
  const [userData, setUserData] = useState<UsersData | null | undefined>(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (
    prevState: any,
    action: {type: any; id: any; name: any},
  ) => {
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
          userName: action.name,
          userToken: action.id,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.name,
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
        const userToken = String(foundUser.id);
        const userName = foundUser.nome;

        setUserData(foundUser);

        try {
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('userName', userName);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGIN', name: userName, id: userToken});
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('userName');
          setUserData(null);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGOUT', id: undefined, name: undefined});
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

      dispatch({type: 'RETRIEVE_TOKEN', id: userToken, name: undefined});
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
            fontSize: 18,
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
        <Stack.Navigator>
          {loginState.userToken !== null ? (
            <Stack.Screen name="Home" component={Home} />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Cadastro" component={Cadastro} />
              <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
