import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CadastroProvider} from '../services/cadastroContext';
import {NavigationContainer} from '@react-navigation/native';
import Tela1 from '../views/Cadastro/views/tela1';
import Tela2 from '../views/Cadastro/views/tela2';
import Tela3 from '../views/Cadastro/views/tela3';

// import { Container } from './styles';
const Stack = createStackNavigator();

const CadastroStack: React.FC = () => {
  return (
    <CadastroProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Credenciais"
          component={Tela1}
          options={{title: 'Cadastro', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DadosPessoais"
          component={Tela2}
          options={{title: 'Cadastro', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Endereço"
          component={Tela3}
          options={{title: 'Cadastro', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </CadastroProvider>
  );
};

export default CadastroStack;
