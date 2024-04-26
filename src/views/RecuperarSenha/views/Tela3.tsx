import React, {useEffect, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import Button from '../../../components/Button';
import {ErrorText} from '../../../components/Input/styles';
import {sendNumberCode} from '../../../services/api/users';
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

const Tela3: React.FC = ({navigation}: any) => {
  const [errors, setErrors] = useState('');
  const [nums, setNums] = useState(['', '', '', '']);
  const [code, setCode] = useState('');

  useEffect(() => {
    function getCode() {
      const newCode = sendNumberCode();
      if (newCode) {
        setCode(newCode);
      }
    }
    getCode();
  }, []);

  const refs = useRef([
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
    React.createRef<TextInput>(),
  ]);

  const handleChangeText = (index: number, value: string) => {
    const newNums = [...nums];
    newNums[index] = value;
    setNums(newNums);

    if (value.length === 1 && index < refs.current.length - 1) {
      refs.current[index + 1].current?.focus();
    }
  };
  function validateCode() {
    const numCode = nums[0] + nums[1] + nums[2] + nums[3];
    if (code === numCode) {
      return false;
    }
    return true;
  }

  function handleSubmit() {
    const validate = validateCode();
    if (validate) {
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
        {nums.map((num, index) => (
          <TextInput
            key={index}
            style={styles.digitsBox}
            maxLength={1}
            value={num}
            onChangeText={value => handleChangeText(index, value)}
            returnKeyType={index < nums.length ? 'next' : 'done'}
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
