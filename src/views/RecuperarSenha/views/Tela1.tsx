import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useForgotPassword} from '../../../services/context/newPasswordContext';
import {Errors} from '../../../types/errors';

import {
  ErrorText,
  InputContainer,
  InputIcon,
  InputText,
} from '../../../components/Input/styles';
import {
  BarContainer,
  BarImage,
  Container,
  ForgotImage,
  Inner,
  SubTitle,
  TextContainer,
  Title,
} from './styles';
import {sendEmail} from '../../../services/api/users';
import {colors} from '../../../globalStyles';
import Button from '../../../components/Button';

const Tela1: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<string>('');

  const {setEmail: storeEmail} = useForgotPassword();

  async function handleSubmit() {
    const result = await sendEmail(email);
    if (result) {
      storeEmail(email);
      navigation.navigate('Verifique');
    } else setErrors('Email não localizado');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: colors.white}}>
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Inner>
            <BarContainer>
              <BarImage source={require('../assets/bar_full.png')} />
              <BarImage source={require('../assets/bar_empty.png')} />
              <BarImage source={require('../assets/bar_empty.png')} />
            </BarContainer>
            <ForgotImage source={require('../assets/forgot_pass.png')} />
            <TextContainer>
              <Title>Esqueceu sua senha?</Title>
              <SubTitle>
                Não se preocupe, isso acontece! Por favor, insira seu e-mail
                para podermos lhe ajudar
              </SubTitle>
            </TextContainer>
            <InputContainer>
              <InputIcon
                source={require('../../../../assets/images/email.png')}
              />
              <InputText
                placeholder="exemplo@email.com"
                placeholderTextColor={colors.gray}
                value={email}
                style={{color: colors.black}}
                onChangeText={setEmail}
              />
            </InputContainer>
            {errors && <ErrorText>{errors}</ErrorText>}
            <Button text="Continuar" handleSubmit={handleSubmit} />
          </Inner>
        </TouchableWithoutFeedback>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Tela1;
