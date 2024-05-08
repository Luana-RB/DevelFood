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
import {colors, screenHeight} from '../../../globalStyles';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import Button from '../../../components/Button';

const Tela1: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const {setEmail: storeEmail} = useForgotPassword();

  async function validateForm() {
    let errors: Errors = {};

    return errors;
  }

  async function handleSubmit() {
    const newErrors = await validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      storeEmail(email);
      const result = await sendEmail(email);
      if (result) navigation.navigate('Verifique');
      else console.log('erro');
    }
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
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <Button text="Continuar" handleSubmit={handleSubmit} />
          </Inner>
        </TouchableWithoutFeedback>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Tela1;
