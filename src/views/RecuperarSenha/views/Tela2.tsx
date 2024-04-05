import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Button from '../../../components/Button';
import {sendToken} from '../../../services/api/users';
import {useForgotPassword} from '../../../services/context/newPasswordContext';
import {
  BarContainer,
  BarImage,
  CodeText,
  Container,
  MailImage,
  SubTitle,
  TextContainer,
  Title,
} from './styles';

const Tela2: React.FC = ({navigation}: any) => {
  const [code, setCode] = useState('');
  const {storeToken} = useForgotPassword();

  useEffect(() => {
    function getCode() {
      const newCode = sendToken();
      if (newCode) {
        setCode(newCode);
        storeToken(newCode);
      }
    }
    getCode();
  }, []);

  return (
    <Container>
      <BarContainer>
        <BarImage source={require('../assets/bar_full.png')} />
        <BarImage source={require('../assets/bar_full.png')} />
        <BarImage source={require('../assets/bar_empty.png')} />
      </BarContainer>
      <MailImage source={require('../assets/mail.png')} />
      <TextContainer>
        <Title>Código de validação</Title>
        <SubTitle>
          Copie ou anote este código, ele será utilizado para você finalizar a
          recuperação de senha!
        </SubTitle>
        <CodeText>{code}</CodeText>
      </TextContainer>
      <View>
        <Button
          text="Continuar"
          handleSubmit={() => {
            navigation.navigate('Verifique');
          }}
        />
      </View>
    </Container>
  );
};

export default Tela2;
