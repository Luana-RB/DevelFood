import React, {useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import Button from '../../../components/Button';
import {ErrorText} from '../../../components/Input/styles';
import {
  BarContainer,
  BarImage,
  Container,
  DigitsContainer,
  MailImage,
  SubTitle,
  TextContainer,
  Title,
  styles,
} from './styles';
import {useForgotPassword} from '../../../services/context/newPasswordContext';
import {verifyCode} from '../../../services/api/users';
import {colors} from '../../../globalStyles';

const Tela3: React.FC = ({navigation}: any) => {
  const [errors, setErrors] = useState('');
  const [code, setCode] = useState(['', '', '', '']);
  const {email} = useForgotPassword();

  const refs = useRef([
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
  ]);

  const handleChangeText = (index: number, value: string) => {
    const newNums = [...code];
    newNums[index] = value;
    setCode(newNums);

    if (value.length === 1 && index < refs.current.length - 1) {
      refs.current[index + 1].current?.focus();
    }
  };

  async function validateCode() {
    const numCode = code[0] + code[1] + code[2] + code[3];
    const response = await verifyCode(email, numCode);
    return response;
  }

  async function handleSubmit() {
    const validate = await validateCode();
    if (!validate) {
      setErrors('Código inválido');
    } else {
      navigation.navigate('Redefinir');
    }
  }

  return (
    <Container>
      <BarContainer>
        <BarImage source={require('../assets/bar_full.png')} />
        <BarImage source={require('../assets/bar_full.png')} />
        <BarImage source={require('../assets/bar_empty.png')} />
      </BarContainer>
      <MailImage source={require('../assets/mail.png')} />
      <TextContainer>
        <Title>Verifique seu e-mail</Title>
        <SubTitle>
          Enviamos um código de verificação para o seu e-mail. Digite-o abaixo
          para redefinir sua senha
        </SubTitle>
      </TextContainer>
      <DigitsContainer>
        {code.map((num, index) => (
          <TextInput
            placeholderTextColor={colors.black}
            key={index}
            style={styles.digitsBox}
            maxLength={1}
            value={num}
            onChangeText={value => handleChangeText(index, value)}
            returnKeyType={index < code.length ? 'next' : 'done'}
            ref={refs.current[index]}
          />
        ))}
      </DigitsContainer>
      {errors && <ErrorText>{errors}</ErrorText>}
      <View>
        <Button text="Confirmar" handleSubmit={handleSubmit} />
      </View>
    </Container>
  );
};

export default Tela3;
