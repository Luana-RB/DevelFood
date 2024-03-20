import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {
  ErrorText,
  InputContainer,
  InputText,
  inputStyles,
} from '../../../components/Input';
import Button from '../../../components/Button';
import {colors} from '../../../globalStyles';
import {Errors} from '../../Login';
import {useCadastro} from '../../../services/cadastroContext';
import {
  CellphoneIcon,
  CheckContainer,
  CheckImage,
  Container,
  DocumentIcon,
  FormContainer,
  LadyImage,
  PersonIcon,
} from './styles';
import {MaskedTextInput} from 'react-native-mask-text';

const Tela2: React.FC = ({navigation}: any) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const {storeInfo} = useCadastro();

  function validateForm() {
    let errors: Errors = {};
    const nomeError = validateNome();
    const sobrenomeError = validateSobrenome();
    const cpfError = validateCpf();
    const telefoneError = validateTelefone();

    if (nomeError) {
      errors.name = nomeError;
    }

    if (sobrenomeError) {
      errors.surname = sobrenomeError;
    }

    if (cpfError) {
      errors.cpf = cpfError;
    }

    if (telefoneError) {
      errors.cellphone = telefoneError;
    }

    return errors;
  }

  function validateNome() {
    if (!nome) {
      return 'Insira um nome';
    }
  }
  function validateSobrenome() {
    if (!sobrenome) {
      return 'Insira um sobrenome';
    }
  }
  function validateCpf() {
    if (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      return undefined;
    }
    return 'CPF inválido';
  }
  function validateTelefone() {
    if (/\+\d{2} \d{5}-\d{4}/.test(telefone)) {
      return undefined;
    }
    return 'Telefone inválido';
  }

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const info = await handleInfo();
      if (info) {
        navigation.navigate('Endereço');
      }
    }
  }

  async function handleInfo() {
    const info = await storeInfo(nome, sobrenome, cpf, telefone);
    return info;
  }

  return (
    <Container automaticallyAdjustKeyboardInsets={true}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <CheckContainer>
        <CheckImage source={require('./assets/checkFull.png')} />
        <CheckImage source={require('./assets/checkEmpty.png')} />
        <CheckImage source={require('./assets/checkEmpty.png')} />
      </CheckContainer>
      <LadyImage source={require('./assets/cadastro2.png')} />
      <FormContainer>
        <InputContainer>
          <PersonIcon source={require('./assets/person.png')} />
          <InputText placeholder="Nome" value={nome} onChangeText={setNome} />
        </InputContainer>
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
        <InputContainer>
          <PersonIcon source={require('./assets/person.png')} />
          <InputText
            placeholder="Sobrenome"
            value={sobrenome}
            onChangeText={setSobrenome}
          />
        </InputContainer>
        {errors.surname && <ErrorText>{errors.surname}</ErrorText>}
        <InputContainer>
          <DocumentIcon source={require('./assets/document.png')} />
          <MaskedTextInput
            style={inputStyles.InputText}
            placeholder="CPF"
            value={cpf}
            onChangeText={formatted => {
              setCpf(formatted as string);
            }}
            mask={'999.999.999-99'}
            keyboardType="numeric"
          />
        </InputContainer>
        {errors.cpf && <ErrorText>{errors.cpf}</ErrorText>}
        <InputContainer>
          <CellphoneIcon source={require('./assets/cellphone.png')} />
          <MaskedTextInput
            style={inputStyles.InputText}
            placeholder="Telefone"
            value={telefone}
            onChangeText={formatted => {
              setTelefone(formatted as string);
            }}
            mask={'+99 99999-9999'}
            keyboardType="numeric"
          />
        </InputContainer>
        {errors.cellphone && <ErrorText>{errors.cellphone}</ErrorText>}
      </FormContainer>
      <Button text="Continuar" handleSubmit={handleSubmit} />
    </Container>
  );
};

export default Tela2;
