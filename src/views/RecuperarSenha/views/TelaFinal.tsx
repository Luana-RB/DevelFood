import React from 'react';
import Button from '../../../components/Button';
import {View} from 'react-native';
import {
  Container,
  LockCheckedImage,
  SubTitle,
  TextContainer,
  Title,
} from './styles';

const TelaFinal: React.FC = ({navigation}: any) => {
  return (
    <Container>
      <LockCheckedImage source={require('../assets/lock_checked.png')} />
      <TextContainer>
        <Title>Senha redefinida!</Title>
        <SubTitle>
          Sua senha foi redefinida com sucesso! Agora você pode aproveitar todos
          os serviços Develfood!
        </SubTitle>
      </TextContainer>
      <View>
        <Button
          text="Continuar"
          handleSubmit={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </Container>
  );
};

export default TelaFinal;
