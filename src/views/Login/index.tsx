import React, {useState} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import Botao from '../../components/Botao';
import {
  BackGroundImagesContainer,
  Container,
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

const Login: React.FC = () => {
  const [olhoIcone, setOlhoIcone] = useState(true);

  function handleSecureSenha() {
    setOlhoIcone(!olhoIcone);
  }

  return (
    <Container>
      <StatusBar />
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
          <InputText placeholder="Email" />
        </InputContainer>
        <InputContainer>
          <InputIcon source={require('../../../assets/images/senha.png')} />
          <InputText placeholder="Senha" secureTextEntry={olhoIcone} />
          <TouchableOpacity onPress={handleSecureSenha}>
            {olhoIcone ? (
              <InputIcon
                source={require('../../../assets/images/eye-slashed.png')}
              />
            ) : (
              <InputIcon source={require('../../../assets/images/eye.png')} />
            )}
          </TouchableOpacity>
        </InputContainer>
        <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 50}}>
          <ForgotPassText>Esqueci minha senha</ForgotPassText>
        </TouchableOpacity>
      </View>
      <Botao texto={'Entrar'} />
      <Pepper
        source={require('../../../assets/images/login3.png')}
        resizeMode="contain">
        <SignInContainer>
          <SignInText>Não possui cadastro?</SignInText>
          <TouchableOpacity>
            <SignInButtonText>Cadastre-se aqui!</SignInButtonText>
          </TouchableOpacity>
        </SignInContainer>
      </Pepper>
    </Container>
  );
};

export default Login;
