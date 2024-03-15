import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../../../globalStyles';
import Button from '../../../components/Button';
import {useCadastro} from '../../../services/cadastroContext';
import {postUser} from '../../../services/users';
import {AuthContext} from '../../../services/authContext';

// import { Container } from './styles';

const TelaFinal: React.FC = () => {
  const {returnsCadastro} = useCadastro();
  function handleSubmit() {
    const user = returnsCadastro();
    postUser(user);
    signIn(user);
  }
  const signIn = React.useContext(AuthContext)?.signIn ?? (() => {});
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        flex: 1,
      }}>
      <Image
        source={require('../../../../assets/images/cadastro4.png')}
        style={{width: 212, height: 232, marginTop: 80, marginBottom: 35}}
      />
      <View style={{width: 275}}>
        <Text style={{fontSize: 28, color: colors.black, marginBottom: 5}}>
          Cadastro Finalizado!
        </Text>
        <Text style={{fontSize: 12, color: colors.gray, marginBottom: 110}}>
          Parabéns! Agora você pode aproveitar nossas ofertas e serviços e
          economizar com super cupons Develfood.
        </Text>
      </View>
      <Button text="Concluir" handleSubmit={handleSubmit} />
    </View>
  );
};

export default TelaFinal;
