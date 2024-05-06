import React, {useEffect, useState} from 'react';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DataCell from './components/DataCell';
import {ScrollView, View} from 'react-native';
import {useUser} from '../../services/context/userContext';
import {Container, IconContainer, Photo} from './styles';
import Button from '../../components/Button';

const EditarPerfil: React.FC = () => {
  const {userData} = useUser();
  const [name, setName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [cpf, setCpf] = useState(userData?.cpf);
  const [phone, setPhone] = useState(userData?.phone);
  const [email, setEmail] = useState(userData?.email);
  const [addressName, setAddressName] = useState(
    userData?.address[0].addressName,
  );
  const [cep, setCep] = useState(userData?.address[0].cep);
  const [street, setStreet] = useState(userData?.address[0].street);
  const [city, setCity] = useState(userData?.address[0].city);
  const [neighbourhood, setNeighbourhood] = useState(
    userData?.address[0].neighbourhood,
  );
  const [state, setState] = useState(userData?.address[0].state);
  const [number, setNumber] = useState(userData?.address[0].number);
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );

  useEffect(() => {
    const path = userData?.image;
    if (path) setImagePath({uri: path});
    else setImagePath(require('../../../assets/images/notFound.png'));
  }, [userData]);

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
          value={name}
          handleChange={setName}
        />
        <DataCell
          icon="account-circle-outline"
          title="Sobrenome"
          value={lastName}
          handleChange={setLastName}
        />
        <DataCell
          icon="card-account-details-outline"
          title="CPF"
          value={cpf}
          handleChange={setCpf}
        />
        <DataCell
          icon="cellphone"
          title="Telefone"
          value={phone}
          handleChange={setPhone}
        />
        <DataCell
          icon="email-outline"
          title="E-mail"
          value={email}
          handleChange={setEmail}
        />
        <View>
          <DataCell
            icon="map-marker-outline"
            title="Apelido"
            value={addressName}
            handleChange={setAddressName}
          />
          <DataCell
            icon="map-marker-outline"
            title="CEP"
            value={cep}
            handleChange={setCep}
          />
        </View>
        <DataCell
          icon="map-marker-outline"
          title="Rua"
          value={street}
          handleChange={setStreet}
        />
        <DataCell
          icon="map-marker-outline"
          title="Cidade"
          value={city}
          handleChange={setCity}
        />
        <DataCell
          icon="map-marker-outline"
          title="Bairro"
          value={neighbourhood}
          handleChange={setNeighbourhood}
        />
        <View>
          <DataCell
            icon="map-marker-outline"
            title="Estado"
            value={state}
            handleChange={setState}
          />
          <DataCell
            icon="map-marker-outline"
            title="Número"
            value={number}
            handleChange={setNumber}
          />
        </View>
        <Button text="Salvar" handleSubmit={() => {}} />
        <View style={{height: 100}} />
      </ScrollView>
    </Container>
  );
};

export default EditarPerfil;
