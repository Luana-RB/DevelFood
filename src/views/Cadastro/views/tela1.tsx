import React, {useState} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {ErrorText, InputContainer, InputText} from '../../../components/Input';
import Button from '../../../components/Button';
import {colors} from '../../../globalStyles';
import validator from 'validator';
import {useCadastro} from '../../../services/context/cadastroContext';
import {
  CheckContainer,
  CheckImage,
  Container,
  FormContainer,
  LadyImage,
} from './styles';
import {Errors} from '../../../types/errors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tela1: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');
  const [olhoIcone, setOlhoIcone] = useState(true);
  const [olhoIconeConfirma, setOlhoIconeConfirma] = useState(true);
  const [errors, setErrors] = useState<Errors>({});

  const {storeCredentials} = useCadastro();

  function validateForm() {
    let errors: Errors = {};

    const emailError = validateEmail();
    if (emailError) errors.email = emailError;
    else {
      // const user = findUserbyId();
      // if (user) {
      //   errors.email = 'E-mail já cadastrado';
      // } else {
      const senhaError = validateSenha();
      if (senhaError) errors.password = senhaError;
      else {
        const senhaConfirmaError = validateSenhaConfirma();
        if (senhaConfirmaError) errors.passwordConfirm = senhaConfirmaError;
      }
      // }
    }
    return errors;
  }

  function validateEmail() {
    if (!email.length) return 'Insira um e-mail';
    if (!validator.isEmail(email)) return 'Insira um e-mail válido';
  }

  function validateSenha() {
    if (senha.length > 5) return undefined;
    return 'A senha deve ter mais que 5 caracteres';
  }

  function validateSenhaConfirma() {
    if (senhaConfirma === senha) return undefined;
    return 'As senhas devem ser iguais';
  }

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const credentials = await handleCredentials();
      if (credentials) navigation.navigate('DadosPessoais');
    }
  }

  async function handleCredentials() {
    const credentials = await storeCredentials(email, senha);
    return credentials;
  }

  function handleSecureSenha() {
    setOlhoIcone(!olhoIcone);
  }
  function handleSecureSenhaConfirma() {
    setOlhoIconeConfirma(!olhoIconeConfirma);
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <CheckContainer>
        <CheckImage source={require('./assets/checkEmpty.png')} />
        <CheckImage source={require('./assets/checkEmpty.png')} />
        <CheckImage source={require('./assets/checkEmpty.png')} />
      </CheckContainer>
      <LadyImage source={require('./assets/cadastro1.png')} />
      <FormContainer>
        <InputContainer>
          <Icon
            name="email-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholder="exemplo@email.com"
            placeholderTextColor={colors.gray}
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <InputContainer>
          <Icon
            name="lock-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholder="senha"
            placeholderTextColor={colors.gray}
            secureTextEntry={olhoIcone}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={handleSecureSenha}>
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
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <InputContainer>
          <Icon
            name="lock-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholder="confirmar senha"
            placeholderTextColor={colors.gray}
            secureTextEntry={olhoIconeConfirma}
            value={senhaConfirma}
            onChangeText={setSenhaConfirma}
          />
          <TouchableOpacity onPress={handleSecureSenhaConfirma}>
            {olhoIconeConfirma ? (
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
        {errors.passwordConfirm && (
          <ErrorText>{errors.passwordConfirm}</ErrorText>
        )}
      </FormContainer>
      <Button text="Continuar" handleSubmit={handleSubmit} />
    </Container>
  );
};

export default Tela1;
