import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {
  ErrorText,
  InputContainer,
  InputText,
} from '../../../components/Input/styles';
import {colors} from '../../../globalStyles';
import {useCadastro} from '../../../services/context/cadastroContext';
import Button from '../../../components/Button';
import {
  CheckContainer,
  CheckImage,
  Container,
  FormContainer,
  LadyImage,
  RowContainer,
} from './styles';
import {MaskedTextInput} from 'react-native-mask-text';
import {Errors} from '../../../types/errors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tela3: React.FC = ({navigation}: any) => {
  const [apelido, setApelido] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [num, setNum] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const {storeAddress} = useCadastro();

  function validateForm() {
    let errors: Errors = {};
    const apelidoError = validateApelido();
    const cepError = validateCep();
    const ruaError = validateRua();
    const cidadeError = validateCidade();
    const bairroError = validateBairro();
    const estadoError = validateEstado();
    const numError = validateNum();

    if (apelidoError) errors.apelido = apelidoError;
    if (cepError) errors.cep = cepError;
    if (ruaError) errors.rua = ruaError;
    if (cidadeError) errors.cidade = cidadeError;
    if (bairroError) errors.bairro = bairroError;
    if (estadoError) errors.estado = estadoError;
    if (numError) errors.num = numError;

    return errors;
  }

  function validateApelido() {
    if (!apelido) return 'Insira um apelido';
  }

  function validateCep() {
    if (/\d{5}-\d{3}/.test(cep)) return undefined;
    return 'Insira um CEP';
  }

  function validateRua() {
    if (!rua) return 'Insira uma rua';
  }

  function validateCidade() {
    if (!cidade) return 'Insira uma cidade';
  }

  function validateBairro() {
    if (!bairro) return 'Insira um bairro';
  }

  function validateEstado() {
    if (/[A-Za-z]{2}/.test(estado)) return undefined;
    return 'Insira um estado';
  }

  function validateNum() {
    if (/^[0-9]+$/.test(num)) return undefined;
    return 'Insira um número';
  }

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const endereco = await handleAddress();
      if (endereco) navigation.navigate('TelaFinal');
    }
  }

  async function handleAddress() {
    const endereco = await storeAddress(
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
    <Container automaticallyAdjustKeyboardInsets={true}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <CheckContainer>
        <CheckImage source={require('./assets/checkFull.png')} />
        <CheckImage source={require('./assets/checkFull.png')} />
        <CheckImage source={require('./assets/checkEmpty.png')} />
      </CheckContainer>
      <LadyImage source={require('./assets/cadastro3.png')} />
      <FormContainer>
        <RowContainer>
          <View style={{width: '55%'}}>
            <InputContainer style={{width: '100%'}}>
              <Icon
                name="map-marker-outline"
                size={25}
                color={colors.gray}
                style={{marginHorizontal: 5}}
              />
              <InputText
                placeholder="Apelido do End."
                placeholderTextColor={colors.gray}
                value={apelido}
                onChangeText={setApelido}
              />
            </InputContainer>
            {errors.apelido && <ErrorText>{errors.apelido}</ErrorText>}
          </View>
          <View style={{width: '40%'}}>
            <InputContainer style={{width: '100%'}}>
              <Icon
                name="map-marker-outline"
                size={25}
                color={colors.gray}
                style={{marginHorizontal: 5}}
              />
              <MaskedTextInput
                placeholder="CEP"
                placeholderTextColor={colors.gray}
                style={{color: colors.black}}
                value={cep}
                onChangeText={formatted => {
                  setCep(formatted as string);
                }}
                mask={'99999-999'}
                keyboardType="numeric"
              />
            </InputContainer>
            {errors.cep && <ErrorText>{errors.cep}</ErrorText>}
          </View>
        </RowContainer>
        <InputContainer>
          <Icon
            name="map-marker-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholder="Rua"
            placeholderTextColor={colors.gray}
            value={rua}
            onChangeText={setRua}
          />
        </InputContainer>
        {errors.rua && <ErrorText>{errors.rua}</ErrorText>}
        <InputContainer>
          <Icon
            name="map-marker-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholder="Cidade"
            placeholderTextColor={colors.gray}
            value={cidade}
            onChangeText={setCidade}
          />
        </InputContainer>
        {errors.cidade && <ErrorText>{errors.cidade}</ErrorText>}
        <InputContainer>
          <Icon
            name="map-marker-outline"
            size={25}
            color={colors.gray}
            style={{marginHorizontal: 8}}
          />
          <InputText
            placeholder="Bairro"
            placeholderTextColor={colors.gray}
            value={bairro}
            onChangeText={setBairro}
          />
        </InputContainer>
        {errors.bairro && <ErrorText>{errors.bairro}</ErrorText>}
        <RowContainer>
          <View style={{width: '47%'}}>
            <InputContainer style={{width: '100%'}}>
              <Icon
                name="map-marker-outline"
                size={25}
                color={colors.gray}
                style={{marginHorizontal: 8}}
              />
              <InputText
                placeholder="Estado"
                placeholderTextColor={colors.gray}
                value={estado}
                onChangeText={setEstado}
                maxLength={2}
              />
            </InputContainer>
            {errors.estado && <ErrorText>{errors.estado}</ErrorText>}
          </View>
          <View style={{width: '48%'}}>
            <InputContainer style={{width: '100%'}}>
              <Icon
                name="map-marker-outline"
                size={25}
                color={colors.gray}
                style={{marginHorizontal: 8}}
              />
              <InputText
                placeholder="Número"
                placeholderTextColor={colors.gray}
                value={num}
                onChangeText={setNum}
                keyboardType="numeric"
              />
            </InputContainer>
            {errors.num && <ErrorText>{errors.num}</ErrorText>}
          </View>
        </RowContainer>
      </FormContainer>
      <Button text="Continuar" handleSubmit={handleSubmit} />
    </Container>
  );
};

export default Tela3;
