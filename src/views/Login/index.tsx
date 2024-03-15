import React, {useEffect, useState} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import Botao from '../../components/Button';
import {
  BackGroundImagesContainer,
  Container,
  ErrorText,
  ForgotPassContainer,
  ForgotPassText,
  InputContainer,
  InputIcon,
  InputText,
  LogoContainer,
  LogoImage,
  LogoText,
  Pepper,
  Pizza,
  Sandwich,
  SignInButtonText,
  SignInContainer,
  SignInText,
} from './styles';
import {getUserById, getUserToken, getUsers} from '../../services/users';
import {useToken} from '../../services/tokenContext';
import {AuthContext} from '../../services/authContext';
import {colors} from '../../globalStyles';
import {UsersData} from '../../types/userData';

export interface Errors {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  name?: string;
  surname?: string;
  cpf?: string;
  cellphone?: string;
  apelido?: string;
  cep?: string;
  rua?: string;
  cidade?: string;
  bairro?: string;
  estado?: string;
  num?: string;
}

const Login: React.FC = ({navigation}: any) => {
  const [olhoIcone, setOlhoIcone] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [users, setUsers] = useState<UsersData[]>([]);

  const {storeToken} = useToken();

  useEffect(() => {
    const fetchUsers = () => {
      const usersFetched: UsersData[] | undefined = getUsers();
      if (usersFetched) {
        console.log(usersFetched);
        setUsers(usersFetched);
      } else {
        console.log('Falha ao buscar users');
      }
    };
    fetchUsers();
  }, []);

  function handleSecurePassword() {
    setOlhoIcone(!olhoIcone);
  }

  function validateForm() {
    let errors: Errors = {};

    const user = findUserbyId();
    if (user) {
      const passwordError = validatePassword(user!);
      if (passwordError) {
        errors.password = passwordError;
      }
    } else {
      errors.email = 'E-mail inválido';
    }
    return errors;
  }

  function findUserByEmail() {
    const user = users.find(user => user.credentials.email === email);
    return user ? user.credentials.id : undefined;
  }

  function findUserbyId() {
    const userId = findUserByEmail();
    if (userId) {
      const user = getUserById(userId);
      return user;
    }
  }

  function validatePassword(user: UsersData) {
    if (user!.credentials.password === password) {
      return undefined;
    }
    return 'Senha inválida';
  }

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const isTokenStored = await handleToken();
      if (isTokenStored) {
        const user = findUserbyId();
        if (user) {
          signIn(user);
        }
      }
    }
  }

  async function handleToken() {
    const token = getUserToken(email);
    if (token) {
      const result = await storeToken(token);
      return result;
    }
  }

  const signIn = React.useContext(AuthContext)?.signIn ?? (() => {});

  return (
    <Container>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <BackGroundImagesContainer>
        <Sandwich source={require('../../../assets/images/login1.jpeg')} />
        <Pizza source={require('../../../assets/images/login2.jpeg')} />
      </BackGroundImagesContainer>
      <LogoContainer>
        <LogoImage source={require('../../../assets/images/dfLogoRed.png')} />
        <LogoText>DEVELFOOD</LogoText>
      </LogoContainer>
      <View style={{alignItems: 'center'}}>
        <InputContainer>
          <InputIcon source={require('../../../assets/images/email.png')} />
          <InputText
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <InputContainer>
          <InputIcon source={require('../../../assets/images/password.png')} />
          <InputText
            placeholder="Senha"
            secureTextEntry={olhoIcone}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleSecurePassword}>
            {olhoIcone ? (
              <InputIcon
                source={require('../../../assets/images/eye-slashed.png')}
              />
            ) : (
              <InputIcon source={require('../../../assets/images/eye.png')} />
            )}
          </TouchableOpacity>
        </InputContainer>
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <ForgotPassContainer
          onPress={() => {
            navigation.navigate('Recuperar Senha');
          }}>
          <ForgotPassText>Esqueci minha senha</ForgotPassText>
        </ForgotPassContainer>
      </View>
      <Botao text={'Entrar'} handleSubmit={handleSubmit} />
      <Pepper
        source={require('../../../assets/images/login3.jpeg')}
        resizeMode="contain">
        <SignInContainer>
          <SignInText>Não possui cadastro?</SignInText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cadastro');
            }}>
            <SignInButtonText>Cadastre-se aqui!</SignInButtonText>
          </TouchableOpacity>
        </SignInContainer>
      </Pepper>
    </Container>
  );
};

export default Login;
