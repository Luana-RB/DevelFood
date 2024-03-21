import {
  CardStyleInterpolators,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Tela1 from '../views/RecuperarSenha/views/Tela1';
import Tela2 from '../views/RecuperarSenha/views/Tela2';
import Tela3 from '../views/RecuperarSenha/views/Tela3';
import Tela4 from '../views/RecuperarSenha/views/Tela4';
import TelaFinal from '../views/RecuperarSenha/views/TelaFinal';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RecuperarSenhaProvider} from '../services/recuperarSenhaContext';

const Stack = createStackNavigator();

type RootStackParamList = {
  Final: undefined;
  Login: undefined;
};

function CustomBackButton() {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Final'>>();
  return (
    <TouchableOpacity onPress={() => navigation.replace('Login')}>
      <Image
        source={require('../../assets/images/x.png')}
        style={{width: 13, height: 13, marginLeft: 20}}
      />
    </TouchableOpacity>
  );
}

const RecuperarSenhaStack: React.FC = () => {
  return (
    <RecuperarSenhaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Esqueceu"
          component={Tela1}
          options={{
            title: 'Recuperação de Senha',
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Código"
          component={Tela2}
          options={{
            title: '',
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Verifique"
          component={Tela3}
          options={{
            title: '',
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Redefinir"
          component={Tela4}
          options={{
            title: '',
            headerTitleAlign: 'center',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Final"
          component={TelaFinal}
          options={{
            title: '',
            headerTitleAlign: 'center',
            headerLeft: props => <CustomBackButton />,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </RecuperarSenhaProvider>
  );
};

export default RecuperarSenhaStack;
