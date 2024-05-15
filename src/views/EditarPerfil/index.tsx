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

  useEffect(() => {
    const path = userData?.image;
    if (path) setImagePath({uri: path});
    else setImagePath(require('../../../assets/images/notFound.png'));
  }, [userData]);

  async function handleSubmit() {
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
          <DataInputCell
            icon="map-marker-outline"
            title="CEP"
            value={cep}
            small={true}
            handleChange={setCep}
          />
        </View>
        <DataInputCell
          icon="map-marker-outline"
          title="Rua"
          value={street}
          handleChange={setStreet}
        />
        <DataInputCell
          icon="map-marker-outline"
          title="Cidade"
          value={city}
          handleChange={setCity}
        />
        <DataInputCell
          icon="map-marker-outline"
          title="Bairro"
          value={neighbourhood}
          handleChange={setNeighbourhood}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <DataInputCell
            icon="map-marker-outline"
            title="Estado"
            small={true}
            value={state}
            handleChange={setState}
          />
          <DataInputCell
            icon="map-marker-outline"
            title="Número"
            small={true}
            value={number}
            handleChange={setNumber}
          />
        </View>
        <Button text="Salvar" handleSubmit={handleSubmit} />
        <View style={{height: 100}} />
      </ScrollView>
    </Container>
  );
};

export default EditarPerfil;
