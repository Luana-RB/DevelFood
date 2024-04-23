import React from 'react';
import Button from '../../../components/Button';
import {useCadastro} from '../../../services/context/cadastroContext';
import {postCadastro, postLogin} from '../../../services/api/users';
import {AuthContext} from '../../../services/context/authContext';
import {
  BigLadyImage,
  CadastroContainer,
  CadastroText,
  CadastroTitle,
  Container,
} from './styles';
import {NewUsersData, UsersData} from '../../../types/userData';
import {useToken} from '../../../services/context/tokenContext';
import {Alert, View} from 'react-native';

const TelaFinal: React.FC = ({navigation}: any) => {
  const {returnsCadastro} = useCadastro();
  const {storeToken} = useToken();
  const signIn = React.useContext(AuthContext)?.signIn ?? (() => {});

  async function handleSubmit() {
    const user = returnsCadastro();
    const newUser = formatUser(user);

    const posted = await postCadastro(newUser);
    if (!posted) {
      Alert.alert('Erro ao realizar cadastro');
      navigation.popToTop();
      return;
    }

    const token = await postLogin(
      user.credentials.email,
      user.credentials.password,
    );

    if (token) {
      const isTokenStored = await storeToken(token);
      signIn(token);
    }
  }

  function formatUser(user: UsersData) {
    const newUser: NewUsersData = {
      email: user.credentials.email,
      senha: user.credentials.password,
      primeiroNome: user.info.name,
      segundoNome: user.info.surname,
      cpf: user.info.cpf.replace(/\D/g, ''),
      numeroCelular: user.info.cellphone.replace(/\D/g, ''),
      cep: user.address.cep.replace(/\D/g, ''),
      rua: user.address.rua,
      cidade: user.address.cidade,
      bairro: user.address.bairro,
      estado: user.address.estado,
      numero: parseInt(user.address.num),
    };
    return newUser;
  }

  return (
    <Container>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <BigLadyImage source={require('./assets/cadastro4.png')} />
        <CadastroContainer>
          <CadastroTitle>Cadastro Finalizado!</CadastroTitle>
          <CadastroText>
            Parabéns! Agora você pode aproveitar nossas ofertas e serviços e
            economizar com super cupons Develfood.
          </CadastroText>
        </CadastroContainer>
        <Button text="Concluir" handleSubmit={handleSubmit} />
      </View>
    </Container>
  );
};

export default TelaFinal;
