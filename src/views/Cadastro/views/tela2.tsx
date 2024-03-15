import React, {useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {InputContainer, InputIcon, InputText} from '../../../components/Input';
import Button from '../../../components/Button';
import {colors} from '../../../globalStyles';
import {Errors} from '../../Login';
import {useCadastro} from '../../../services/cadastroContext';

// import { Container } from './styles';

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
    if (/^\d{11}$/.test(cpf)) {
      return undefined;
    }
    return 'CPF inválido';
  }
  function validateTelefone() {
    if (/^\d{11}$/.test(telefone)) {
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
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 70,
          marginTop: 22,
        }}>
        <Image
          source={require('../../../../assets/images/checkFull.png')}
          style={{width: 46, height: 47}}
        />
        <Image
          source={require('../../../../assets/images/checkEmpty.png')}
          style={{width: 46, height: 47}}
        />
        <Image
          source={require('../../../../assets/images/checkEmpty.png')}
          style={{width: 46, height: 47}}
        />
      </View>
      <Image
        source={require('../../../../assets/images/cadastro2.png')}
        style={{
          alignSelf: 'center',
          width: 80,
          height: 180,
          marginTop: 6,
          marginBottom: 26,
        }}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/person.png')}
            style={{width: 20, height: 20, marginLeft: 15, marginRight: 14}}
          />
          <InputText placeholder="Nome" value={nome} onChangeText={setNome} />
        </InputContainer>
        {errors.name && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.name}
          </Text>
        )}
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/person.png')}
            style={{width: 20, height: 20, marginLeft: 15, marginRight: 14}}
          />
          <InputText
            placeholder="Sobrenome"
            value={sobrenome}
            onChangeText={setSobrenome}
          />
        </InputContainer>
        {errors.surname && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.surname}
          </Text>
        )}
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/document.png')}
            style={{width: 29, height: 1}}
          />
          <InputText
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />
        </InputContainer>
        {errors.cpf && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.cpf}
          </Text>
        )}
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/cellphone.png')}
            style={{width: 21, height: 25, marginLeft: 14, marginRight: 14}}
          />
          <InputText
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
          />
        </InputContainer>
        {errors.cellphone && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.cellphone}
          </Text>
        )}
      </View>
      <Button text="Continuar" handleSubmit={handleSubmit} />
    </View>
  );
};

export default Tela2;
