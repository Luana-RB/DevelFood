import React from 'react';
import Button from '../../../components/Button';
import {useCadastro} from '../../../services/context/cadastroContext';
import {
  getUserToken,
  postCadastro,
  postLogin,
} from '../../../services/api/users';
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
import {View} from 'react-native';

const TelaFinal: React.FC = () => {
  const {returnsCadastro} = useCadastro();
  const {storeToken} = useToken();

  async function handleSubmit() {
    const user = returnsCadastro();
    console.log('oui');
    console.log(parseInt(user.info.cpf));
    const newUser: NewUsersData = {
      email: user.credentials.email,
      senha: user.credentials.password,
      primeiroNome: user.info.name,
      segundoNome: user.info.surname,
      cpf: user.info.cpf,
      numeroCelular: user.info.cellphone,
      apelido: user.adress.apelido,
      cep: user.adress.cep,
      rua: user.adress.rua,
      cidade: user.adress.cidade,
      bairro: user.adress.bairro,
      estado: user.adress.estado,
      numero: parseInt(user.adress.num),
    };

    const posted = await postCadastro(newUser);
    const signed = await postLogin(user);
    const isTokenStored = await handleToken(signed);
    if (isTokenStored) {
      signIn(user);
    }
  }

  async function handleToken(token: any) {
    if (token) {
      const result = await storeToken(token);
      return result;
    }
  }

  const signIn = React.useContext(AuthContext)?.signIn ?? (() => {});
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
