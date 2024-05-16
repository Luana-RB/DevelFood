import React, {useEffect, useState} from 'react';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DataInputCell from './components/DataInputCell';
import {Alert, ScrollView, View} from 'react-native';
import {useUser} from '../../services/context/userContext';
import {Container, IconContainer, Photo} from './styles';
import Button from '../../components/Button';
import DataCell from './components/DataCell';
import {UserData} from '../../types/userData';
import {getUserData, putUser} from '../../services/api/users';
import {getAddressById, patchUserAddress} from '../../services/api/address';
import {Errors} from '../../types/errors';
import {ErrorText} from '../../components/Input/styles';

const EditarPerfil: React.FC = () => {
  const {userData, userAddress, storeAddress, storeData} = useUser();
  const firstName = userData?.firstName ?? '';
  const lastName = userData?.lastName ?? '';
  const cpf = userData?.cpf ?? '';
  const email = userData?.email ?? '';
  const [phone, setPhone] = useState(userData?.phone ?? '');
  const [addressName, setAddressName] = useState(
    userAddress?.addressName ?? '',
  );
  const [cep, setCep] = useState(userAddress?.cep ?? '');
  const [street, setStreet] = useState(userAddress?.street ?? '');
  const [city, setCity] = useState(userAddress?.city ?? '');
  const [neighbourhood, setNeighbourhood] = useState(
    userAddress?.neighbourhood ?? '',
  );
  const [state, setState] = useState(userAddress?.state ?? '');
  const [number, setNumber] = useState(String(userAddress?.number ?? ''));
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const path = userData?.image;
    if (path) setImagePath({uri: path});
    else setImagePath(require('../../../assets/images/notFound.png'));
  }, [userData]);

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newUser: UserData = {
        id: userData?.id,
        password: userData?.password!,
        firstName,
        lastName,
        email,
        image: userData?.image ?? '',
        cpf,
        phone,
        address: [
          {
            addressName: addressName,
            addressId: userAddress?.id,
            cep: cep,
            street: street,
            state: state,
            city: city,
            neighbourhood: neighbourhood,
            number: number,
          },
        ],
      };
      const userResponse = await putUser(newUser);
      const addressResponse = await patchUserAddress(newUser);
      if (userResponse && addressResponse) {
        Alert.alert('Salvo com sucesso');
        const fetchedUserData = await getUserData();
        storeData(fetchedUserData);
        const fetchedUserAddress = await getAddressById();
        storeAddress(fetchedUserAddress);
      } else Alert.alert('Falha ao salvar');
    }
  }

  function validateForm() {
    let errors: Errors = {};
    const telefoneError = validateTelefone();
    if (telefoneError) errors.cellphone = telefoneError;
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
    if (!addressName) return 'Insira um apelido';
  }

  function validateCep() {
    if (/\d{5}-\d{3}/.test(cep)) return undefined;
    return 'Insira um CEP';
  }

  function validateRua() {
    if (!street) return 'Insira uma rua';
  }

  function validateCidade() {
    if (!city) return 'Insira uma cidade';
  }

  function validateBairro() {
    if (!neighbourhood) return 'Insira um bairro';
  }

  function validateEstado() {
    if (/[A-Za-z]{2}/.test(state)) return undefined;
    return 'Insira um estado';
  }

  function validateNum() {
    if (/^[0-9]+$/.test(number)) return undefined;
    return 'Insira um número';
  }

  function validateTelefone() {
    if (!/\+\d{2} \d{5}-\d{4}/.test(phone)) return 'Telefone inválido';
    return undefined;
  }

  return (
    <Container>
      <FocusAwareStatusBar
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <Photo source={imagePath} />
      <IconContainer>
        <Icon name="camera-outline" size={20} color={colors.red} />
      </IconContainer>
      <ScrollView>
        <DataCell
          icon="account-circle-outline"
          title="Nome"
          value={firstName}
          handleChange={() => {}}
        />
        <DataCell
          icon="account-circle-outline"
          title="Sobrenome"
          value={lastName}
          handleChange={() => {}}
        />
        <DataCell
          icon="card-account-details-outline"
          title="CPF"
          value={cpf}
          handleChange={() => {}}
        />
        <DataInputCell
          icon="cellphone"
          title="Telefone"
          value={phone}
          handleChange={setPhone}
        />
        {errors.cellphone && <ErrorText>{errors.cellphone}</ErrorText>}
        <DataCell
          icon="email-outline"
          title="E-mail"
          value={email}
          handleChange={() => {}}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <DataInputCell
            icon="map-marker-outline"
            title="Apelido"
            small={true}
            value={addressName}
            handleChange={setAddressName}
          />
          {errors.apelido && <ErrorText>{errors.apelido}</ErrorText>}
          <DataInputCell
            icon="map-marker-outline"
            title="CEP"
            value={cep}
            small={true}
            handleChange={setCep}
          />
          {errors.cep && <ErrorText>{errors.cep}</ErrorText>}
        </View>
        <DataInputCell
          icon="map-marker-outline"
          title="Rua"
          value={street}
          handleChange={setStreet}
        />
        {errors.rua && <ErrorText>{errors.rua}</ErrorText>}
        <DataInputCell
          icon="map-marker-outline"
          title="Cidade"
          value={city}
          handleChange={setCity}
        />
        {errors.cidade && <ErrorText>{errors.cidade}</ErrorText>}
        <DataInputCell
          icon="map-marker-outline"
          title="Bairro"
          value={neighbourhood}
          handleChange={setNeighbourhood}
        />
        {errors.bairro && <ErrorText>{errors.bairro}</ErrorText>}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <DataInputCell
            icon="map-marker-outline"
            title="Estado"
            small={true}
            value={state}
            handleChange={setState}
          />
          {errors.estado && <ErrorText>{errors.estado}</ErrorText>}
          <DataInputCell
            icon="map-marker-outline"
            title="Número"
            small={true}
            value={number}
            handleChange={setNumber}
          />
          {errors.num && <ErrorText>{errors.num}</ErrorText>}
        </View>
        <Button text="Salvar" handleSubmit={handleSubmit} />
        <View style={{height: 100}} />
      </ScrollView>
    </Container>
  );
};

export default EditarPerfil;
