import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../../../components/Button';
import {postPassword} from '../../../services/api/users';
import {useForgotPassword} from '../../../services/context/newPasswordContext';
import {Errors} from '../../../types/errors';
import {
  ErrorText,
  InputContainer,
  InputIcon,
  InputText,
} from '../../../components/Input/styles';
import {
  BarContainer,
  BarImage,
  Container,
  Inner,
  LockImage,
  SubTitle,
  TextContainer,
  Title,
} from './styles';
import {colors} from '../../../globalStyles';

const Tela4: React.FC = ({navigation}: any) => {
  const [olhoIconeSenha, setOlhoIconeSenha] = useState(true);
  const [olhoIconeConfirma, setOlhoIconeConfirma] = useState(true);
  const [errors, setErrors] = useState<Errors>({});
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const {email} = useForgotPassword();

  function handleSecureSenha() {
    setOlhoIconeSenha(!olhoIconeSenha);
  }
  function handleSecureConfirma() {
    setOlhoIconeConfirma(!olhoIconeConfirma);
  }

  function validateForm() {
    let errors: Errors = {};

    const passwordError = validatePassword();
    if (passwordError) {
      errors.password = passwordError;
    } else {
      const passwordConfirmError = validatePasswordConfirm();
      if (passwordConfirmError) {
        errors.passwordConfirm = passwordConfirmError;
      }
    }
    return errors;
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

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const patched = await postPassword(email, password);
      if (patched) {
        navigation.navigate('Final');
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: colors.white}}>
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Inner>
            <BarContainer>
              <BarImage source={require('../assets/bar_full.png')} />
              <BarImage source={require('../assets/bar_full.png')} />
              <BarImage source={require('../assets/bar_full.png')} />
            </BarContainer>
            <LockImage source={require('../assets/lock.png')} />
            <TextContainer>
              <Title>Redefinir senha</Title>
              <SubTitle>
                Sua nova senha deve ter no mínimo 6 caracteres
              </SubTitle>
            </TextContainer>
            <View>
              <InputContainer>
                <InputIcon
                  source={require('../../../../assets/images/password.png')}
                />
                <InputText
                  placeholder="senha"
                  placeholderTextColor={colors.gray}
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
                  placeholderTextColor={colors.gray}
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
          </Inner>
        </TouchableWithoutFeedback>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Tela4;
