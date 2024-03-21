import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Button from '../../../components/Button';
import {patchPassword} from '../../../services/users';
import {useRecuperarSenha} from '../../../services/recuperarSenhaContext';
import {Errors} from '../../../types/errors';
import {
  ErrorText,
  InputContainer,
  InputIcon,
  InputText,
} from '../../../components/Input';
import {
  BarContainer,
  BarImage,
  Container,
  LockImage,
  SubTitle,
  TextContainer,
  Title,
} from './styles';

const Tela4: React.FC = ({navigation}: any) => {
  const [olhoIconeToken, setOlhoIconeToken] = useState(true);
  const [olhoIconeSenha, setOlhoIconeSenha] = useState(true);
  const [olhoIconeConfirma, setOlhoIconeConfirma] = useState(true);
  const [errors, setErrors] = useState<Errors>({});
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const {returnsUser, token} = useRecuperarSenha();

  function handleSecure() {
    setOlhoIconeToken(!olhoIconeToken);
  }
  function handleSecureSenha() {
    setOlhoIconeSenha(!olhoIconeSenha);
  }
  function handleSecureConfirma() {
    setOlhoIconeConfirma(!olhoIconeConfirma);
  }

  function validateForm() {
    let errors: Errors = {};

    const codeError = validateCode();
    if (codeError) {
      errors.password = codeError;
    } else {
      const passwordError = validatePassword();
      if (passwordError) {
        errors.password = passwordError;
      } else {
        const passwordConfirmError = validatePasswordConfirm();
        if (passwordConfirmError) {
          errors.passwordConfirm = passwordConfirmError;
        }
      }
    }
    return errors;
  }

  function validateCode() {
    if (token === code) {
      return undefined;
    }
    return 'Código incorreto';
  }

  function validatePassword() {
    if (password.length < 6) {
      return 'Senha deve ter pelo menos 6 dígitos';
    }
  }

  function validatePasswordConfirm() {
    if (password !== passwordConfirm) {
      return 'As senhas devem ser iguais';
    }
  }

  function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const user = returnsUser();
      if (user) {
        const sucess = patchPassword(user, password);
        if (sucess) {
          navigation.navigate('Final');
        }
      }
    }
  }

  return (
    <Container>
      <BarContainer>
        <BarImage source={require('../assets/bar_full.png')} />
        <BarImage source={require('../assets/bar_full.png')} />
        <BarImage source={require('../assets/bar_full.png')} />
      </BarContainer>
      <LockImage source={require('../assets/lock.png')} />
      <TextContainer>
        <Title>Redefinir senha</Title>
        <SubTitle>Sua nova senha deve ter no mínimo 6 caracteres</SubTitle>
      </TextContainer>
      <View>
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/password.png')}
          />
          <InputText
            placeholder="código"
            secureTextEntry={olhoIconeToken}
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity onPress={handleSecure}>
            {olhoIconeToken ? (
              <InputIcon
                source={require('../../../../assets/images/eye-slashed.png')}
              />
            ) : (
              <InputIcon
                source={require('../../../../assets/images/eye.png')}
              />
            )}
          </TouchableOpacity>
        </InputContainer>
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/password.png')}
          />
          <InputText
            placeholder="senha"
            secureTextEntry={olhoIconeSenha}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={handleSecureSenha}>
            {olhoIconeSenha ? (
              <InputIcon
                source={require('../../../../assets/images/eye-slashed.png')}
              />
            ) : (
              <InputIcon
                source={require('../../../../assets/images/eye.png')}
              />
            )}
          </TouchableOpacity>
        </InputContainer>
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/password.png')}
          />
          <InputText
            placeholder="confirmar senha"
            secureTextEntry={olhoIconeConfirma}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
          />
          <TouchableOpacity onPress={handleSecureConfirma}>
            {olhoIconeConfirma ? (
              <InputIcon
                source={require('../../../../assets/images/eye-slashed.png')}
              />
            ) : (
              <InputIcon
                source={require('../../../../assets/images/eye.png')}
              />
            )}
          </TouchableOpacity>
        </InputContainer>
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        {errors.passwordConfirm && (
          <ErrorText>{errors.passwordConfirm}</ErrorText>
        )}
        <Button text="Concluir" handleSubmit={handleSubmit} />
      </View>
    </Container>
  );
};

export default Tela4;
