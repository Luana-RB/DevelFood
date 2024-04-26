import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {
  ErrorText,
  InputContainer,
  InputText,
} from '../../../components/Input/styles';
import Button from '../../../components/Button';
import {colors} from '../../../globalStyles';
import {useCadastro} from '../../../services/context/cadastroContext';
import {
  CheckContainer,
  CheckImage,
  Container,
  FormContainer,
  LadyImage,
} from './styles';
import {MaskedTextInput} from 'react-native-mask-text';
import {Errors} from '../../../types/errors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {checkCpf, checkPhone} from '../../../services/api/users';

const Tela2: React.FC = ({navigation}: any) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const {storeInfo} = useCadastro();

  async function validateForm() {
    let errors: Errors = {};
    const nomeError = validateNome();
    const sobrenomeError = validateSobrenome();
    const cpfError = await validateCpf();
    const telefoneError = await validateTelefone();

    if (nomeError) errors.name = nomeError;
    if (sobrenomeError) errors.surname = sobrenomeError;
    if (cpfError) errors.cpf = cpfError;
    if (telefoneError) errors.cellphone = telefoneError;

    return errors;
  }

  function validateNome() {
    if (!nome) return 'Insira um nome';
  }

  function validateSobrenome() {
    if (!sobrenome) return 'Insira um sobrenome';
  }

  async function validateCpf() {
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) return 'CPF inválido';
    const isRegistered = await checkCpf(cpf);
    if (!isRegistered) return 'CPF já cadastrado';
    return undefined;
  }

  async function validateTelefone() {
    if (!/\+\d{2} \d{5}-\d{4}/.test(telefone)) return 'Telefone inválido';
    const isRegistered = await checkPhone(telefone);
    if (!isRegistered) return 'Telefone já cadastrado';
    return undefined;
  }

  async function handleSubmit() {
    const newErrors = await validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const info = await handleInfo();
      if (info) navigation.navigate('Endereço');
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
          <Icon
            name="account-circle-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholderTextColor={colors.gray}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
        </InputContainer>
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
        <InputContainer>
          <Icon
            name="account-circle-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholder="Sobrenome"
            placeholderTextColor={colors.gray}
            value={sobrenome}
            onChangeText={setSobrenome}
          />
        </InputContainer>
        {errors.surname && <ErrorText>{errors.surname}</ErrorText>}
        <InputContainer>
          <Icon
            name="card-account-details-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <MaskedTextInput
            style={{color: colors.black, width: '90%'}}
            placeholder="CPF"
            placeholderTextColor={colors.gray}
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
          <Icon
            name="cellphone"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <MaskedTextInput
            style={{color: colors.black}}
            placeholder="Telefone"
            placeholderTextColor={colors.gray}
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
