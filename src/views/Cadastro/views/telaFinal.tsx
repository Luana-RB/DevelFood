import React from 'react';
import Button from '../../../components/Button';
import {useCadastro} from '../../../services/cadastroContext';
import {getUserToken, postUser} from '../../../services/users';
import {AuthContext} from '../../../services/authContext';
import {
  BigLadyImage,
  CadastroContainer,
  CadastroText,
  CadastroTitle,
  Container,
} from './styles';
import {UsersData} from '../../../types/userData';
import {useToken} from '../../../services/tokenContext';
import {View} from 'react-native';

const TelaFinal: React.FC = () => {
  const {returnsCadastro} = useCadastro();
  const {storeToken} = useToken();

  async function handleSubmit() {
    const user = returnsCadastro();
    const posted = postUser(user);
    if (posted) {
      const isTokenStored = await handleToken(user);
      if (isTokenStored) {
        signIn(user);
      }
    }
  }

  async function handleToken(user: UsersData) {
    const token = getUserToken(user.credentials.email);
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
