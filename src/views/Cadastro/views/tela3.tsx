import React, {useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {InputContainer, InputIcon, InputText} from '../../../components/Input';
import Botao from '../../../components/Botao';
import {colors} from '../../../globalStyles';
import {Errors} from '../../Login';
import {useCadastro} from '../../../services/cadastroContext';

// import { Container } from './styles';

const Tela3: React.FC = ({navigation}: any) => {
  const [apelido, setApelido] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [num, setNum] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const {storeEndereco} = useCadastro();

  function validateApelido() {
    if (!apelido) {
      return 'Insira um apelido';
    }
  }

  function validateCep() {
    if (!cep) {
      return 'Insira um CEP';
    }
  }

  function validateRua() {
    if (!rua) {
      return 'Insira uma rua';
    }
  }

  function validateCidade() {
    if (!cidade) {
      return 'Insira uma cidade';
    }
  }

  function validateBairro() {
    if (!bairro) {
      return 'Insira um bairro';
    }
  }

  function validateEstado() {
    if (!estado) {
      return 'Insira um estado';
    }
  }

  function validateNum() {
    if (!num) {
      return 'Insira um número';
    }
  }

  function validateForm() {
    let errors: Errors = {};
    const apelidoError = validateApelido();
    const cepError = validateCep();
    const ruaError = validateRua();
    const cidadeError = validateCidade();
    const bairroError = validateBairro();
    const estadoError = validateEstado();
    const numError = validateNum();

    if (apelidoError) {
      errors.apelido = apelidoError;
    }

    if (cepError) {
      errors.cep = cepError;
    }

    if (ruaError) {
      errors.rua = ruaError;
    }

    if (cidadeError) {
      errors.cidade = cidadeError;
    }

    if (bairroError) {
      errors.bairro = bairroError;
    }

    if (estadoError) {
      errors.estado = estadoError;
    }

    if (numError) {
      errors.num = numError;
    }

    return errors;
  }

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const endereco = await handleEndereco();
      if (endereco) {
        navigation.navigate('TelaFinal');
      }
    }
  }

  async function handleEndereco() {
    const endereco = await storeEndereco(
      apelido,
      cep,
      rua,
      cidade,
      bairro,
      estado,
      num,
    );
    return endereco;
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
          source={require('../../../../assets/images/checkFull.png')}
          style={{width: 46, height: 47}}
        />
        <Image
          source={require('../../../../assets/images/checkEmpty.png')}
          style={{width: 46, height: 47}}
        />
      </View>
      <Image
        source={require('../../../../assets/images/cadastro3.png')}
        style={{
          alignSelf: 'center',
          width: 80,
          height: 180,
          marginTop: 6,
          marginBottom: 26,
        }}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <View>
            <InputContainer style={{width: 160}}>
              <InputIcon
                source={require('../../../../assets/images/endereco.png')}
                style={{width: 11, height: 30}}
              />
              <InputText
                placeholder="Apelido do End."
                value={apelido}
                onChangeText={setApelido}
              />
            </InputContainer>
            {errors.apelido && (
              <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
                {errors.apelido}
              </Text>
            )}
          </View>
          <View>
            <InputContainer style={{width: 120}}>
              <InputIcon
                source={require('../../../../assets/images/endereco.png')}
                style={{width: 11, height: 30}}
              />
              <InputText placeholder="CEP" value={cep} onChangeText={setCep} />
            </InputContainer>
            {errors.cep && (
              <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
                {errors.cep}
              </Text>
            )}
          </View>
        </View>
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/endereco.png')}
            style={{width: 11, height: 30}}
          />
          <InputText placeholder="Rua" value={rua} onChangeText={setRua} />
        </InputContainer>
        {errors.rua && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.rua}
          </Text>
        )}
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/endereco.png')}
            style={{width: 11, height: 30}}
          />
          <InputText
            placeholder="Cidade"
            value={cidade}
            onChangeText={setCidade}
          />
        </InputContainer>
        {errors.cidade && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.cidade}
          </Text>
        )}
        <InputContainer>
          <InputIcon
            source={require('../../../../assets/images/endereco.png')}
            style={{width: 11, height: 30}}
          />
          <InputText
            placeholder="Bairro"
            value={bairro}
            onChangeText={setBairro}
          />
        </InputContainer>
        {errors.bairro && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.bairro}
          </Text>
        )}
        <View style={{flexDirection: 'row', gap: 15}}>
          <View>
            <InputContainer style={{width: 140}}>
              <InputIcon
                source={require('../../../../assets/images/endereco.png')}
                style={{width: 11, height: 30}}
              />
              <InputText
                placeholder="Estado"
                value={estado}
                onChangeText={setEstado}
              />
            </InputContainer>
            {errors.estado && (
              <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
                {errors.estado}
              </Text>
            )}
          </View>
          <View>
            <InputContainer style={{width: 140}}>
              <InputIcon
                source={require('../../../../assets/images/endereco.png')}
                style={{width: 11, height: 30}}
              />
              <InputText
                placeholder="Número"
                value={num}
                onChangeText={setNum}
              />
            </InputContainer>
            {errors.num && (
              <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
                {errors.num}
              </Text>
            )}
          </View>
        </View>
      </View>
      <Botao texto="Continuar" handleSubmit={handleSubmit} />
    </View>
  );
};

export default Tela3;
