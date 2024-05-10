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
import {UserStoreData} from '../../../types/userData';
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
      await storeToken(token);
      signIn(token);
    }
  }

  function formatUser(user: UserStoreData) {
    const newUser = {
      email: user.credentials.email,
      password: user.credentials.password,
      firstName: user.info.firstName,
      lastName: user.info.lastName,
      cpf: user.info.cpf.replace(/\D/g, ''),
      phone: user.info.phone.replace(/\D/g, ''),
      addressName: user.address[0].addressName,
      cep: user.address[0].cep.replace(/\D/g, ''),
      street: user.address[0].street,
      city: user.address[0].city,
      neighbourhood: user.address[0].neighbourhood,
      state: user.address[0].state,
      number: user.address[0].number,
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
