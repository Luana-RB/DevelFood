import React, {useState} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import Botao from '../../components/Button';
import {useToken} from '../../services/context/tokenContext';
import {AuthContext} from '../../services/context/authContext';
import {colors} from '../../globalStyles';
import {Errors} from '../../types/errors';
import {
  BackGroundImagesContainer,
  Container,
  ForgotPassContainer,
  ForgotPassText,
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
import {postLogin} from '../../services/api/users';
import {
  ErrorText,
  InputContainer,
  InputText,
} from '../../components/Input/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login: React.FC = ({navigation}: any) => {
  const [olhoIcone, setOlhoIcone] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const {storeToken} = useToken();
  const signIn = React.useContext(AuthContext)?.signIn ?? (() => {});

  function handleSecurePassword() {
    setOlhoIcone(!olhoIcone);
  }

  function validateForm() {
    let errors: Errors = {};
    if (!email && !password) errors.email = 'Insira email e senha';
    else errors.email = 'E-mail ou senha inválidos';
    setErrors(errors);
  }

  async function handleSubmit() {
    const token = await postLogin(email, password);
    if (token) {
      const isTokenStored = await storeToken(token);
      signIn(token);
    } else validateForm();
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <BackGroundImagesContainer>
        <Sandwich source={require('./assets/login1.jpeg')} />
        <Pizza source={require('./assets/login2.jpeg')} />
      </BackGroundImagesContainer>
      <LogoContainer>
        <LogoImage source={require('./assets/dfLogoRed.png')} />
        <LogoText>DEVELFOOD</LogoText>
      </LogoContainer>
      <View style={{alignItems: 'center'}}>
        <InputContainer>
          <Icon
            name="email-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholderTextColor={colors.gray}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>
        <InputContainer>
          <Icon
            name="lock-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholderTextColor={colors.gray}
            placeholder="Senha"
            secureTextEntry={olhoIcone}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleSecurePassword}>
            {olhoIcone ? (
              <Icon
                name="eye-off-outline"
                size={25}
                color={colors.gray}
                style={{marginHorizontal: 10}}
              />
            ) : (
              <Icon
                name="eye-outline"
                size={25}
                color={colors.gray}
                style={{marginHorizontal: 10}}
              />
            )}
          </TouchableOpacity>
        </InputContainer>
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <ForgotPassContainer
          onPress={() => {
            navigation.navigate('Recuperar Senha');
          }}>
          <ForgotPassText>Esqueci minha senha</ForgotPassText>
        </ForgotPassContainer>
      </View>
      <Botao text={'Entrar'} handleSubmit={handleSubmit} />
      <Pepper source={require('./assets/login3.jpeg')} resizeMode="contain">
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
