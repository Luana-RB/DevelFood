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
import {View} from 'react-native';

const TelaFinal: React.FC = () => {
  const {returnsCadastro} = useCadastro();
  const {storeToken} = useToken();
  const signIn = React.useContext(AuthContext)?.signIn ?? (() => {});

  async function handleSubmit() {
    const user = returnsCadastro();
    const newUser = formatUser(user);

    const posted = await postCadastro(newUser);
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
      password: user.credentials.password,
      firstName: user.info.name,
      lastName: user.info.surname,
      cpf: user.info.cpf.replace(/\D/g, ''),
      phone: user.info.cellphone.replace(/\D/g, ''),
      zipcode: user.adress.cep.replace(/\D/g, ''),
      street: user.adress.rua,
      city: user.adress.cidade,
      neighbourhood: user.adress.bairro,
      number: parseInt(user.adress.num),
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
