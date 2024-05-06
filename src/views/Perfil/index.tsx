import React, {useEffect, useState} from 'react';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {AuthContext} from '../../services/context/authContext';
import Card from './components/Card';
import {
  BodyContainer,
  Container,
  EditButton,
  EditText,
  HeaderContainer,
  HeaderTextContainer,
  Photo,
  Title,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useUser} from '../../services/context/userContext';
import {Alert, Linking} from 'react-native';
import {removeUserData} from '../../services/api/users';

const Perfil: React.FC = (navigation: any) => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  const {userData} = useUser();
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );

  useEffect(() => {
    const path = userData?.image;
    if (path) setImagePath({uri: path});
    else setImagePath(require('../../../assets/images/notFound.png'));
  }, [userData]);

  function handleEditar() {
    // navigation.navigate('EditarPerfil');
  }
  function handleAjuda() {
    Linking.openURL('https://www.develcode.com.br/');
  }
  function handleSobre() {
    Linking.openURL('https://www.develcode.com.br/');
  }
  function handleSair() {
    signOut();
  }
  function handleExcluir() {
    Alert.alert('Excluir sua conta?', '', [
      {
        text: 'Não',
        onPress: () => {
          return;
        },
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          removeUserData(userData?.id ?? '1');
          signOut();
        },
      },
    ]);
  }

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <HeaderContainer>
        <Photo source={imagePath} />
        <HeaderTextContainer>
          <Title>Seja bem-vindo, {userData?.firstName}!</Title>
          <EditButton onPress={handleEditar}>
            <EditText>Editar perfil</EditText>
            <Icon name="pencil" size={15} color={colors.red} />
          </EditButton>
        </HeaderTextContainer>
      </HeaderContainer>
      <BodyContainer>
        <Card
          icon="help-circle-outline"
          text="Ajuda"
          handleSubmit={handleAjuda}
        />
        <Card
          icon="alpha-d-circle"
          text="Sobre o DevelFood"
          handleSubmit={handleSobre}
        />
        <Card icon="logout" text="Sair do app" handleSubmit={handleSair} />
        <Card
          icon="account-remove"
          text="Excluir conta"
          handleSubmit={handleExcluir}
        />
      </BodyContainer>
    </Container>
  );
};

export default Perfil;
