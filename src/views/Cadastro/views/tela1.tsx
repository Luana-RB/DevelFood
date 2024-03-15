import React, {useEffect, useState} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {InputContainer, InputIcon, InputText} from '../../../components/Input';
import Botao from '../../../components/Botao';
import {colors} from '../../../globalStyles';
import {Errors} from '../../Login';
import {getUserById, getUsers} from '../../../services/users';
import validator from 'validator';
import {useCadastro} from '../../../services/cadastroContext';
import {UsersData} from '../../../types/userData';

// import { Container } from './styles';

const Tela1: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');
  const [olhoIcone, setOlhoIcone] = useState(true);
  const [olhoIconeConfirma, setOlhoIconeConfirma] = useState(true);
  const [errors, setErrors] = useState<Errors>({});
  const [users, setUsers] = useState<UsersData[]>([]);

  const {storeCredentials} = useCadastro();

  useEffect(() => {
    const fetchUsers = () => {
      const usersFetched: UsersData[] | undefined = getUsers();
      if (usersFetched) {
        setUsers(usersFetched);
      } else {
        console.log('Falha ao buscar users');
      }
    };
    fetchUsers();
  }, []);

  function validateForm() {
    let errors: Errors = {};

    const emailError = validateEmail();
    if (emailError) {
      errors.email = emailError;
    } else {
      const user = findUserbyId();
      if (user) {
        errors.email = 'E-mail já cadastrado';
      } else {
        const senhaError = validateSenha();
        if (senhaError) {
          errors.password = senhaError;
        } else {
          const senhaConfirmaError = validateSenhaConfirma();
          if (senhaConfirmaError) {
            errors.passwordConfirm = senhaConfirmaError;
          }
        }
      }
    }

    return errors;
  }

  function validateEmail() {
    if (!email.length) {
      return 'Insira um e-mail';
    }
    if (!validator.isEmail(email)) {
      return 'Insira um e-mail válido';
    }
  }

  function findUserByEmail() {
    const user = users.find(user => user.credentials.email === email);
    return user ? user.credentials.id : undefined;
  }

  function findUserbyId() {
    const userId = findUserByEmail();
    if (userId) {
      const user = getUserById(userId);
      return user;
    }
  }

  function validateSenha() {
    if (senha.length > 5) {
      return undefined;
    }
    return 'A senha deve ter mais que 5 caracteres';
  }

  function validateSenhaConfirma() {
    if (senhaConfirma === senha) {
      return undefined;
    }
    return 'As senhas devem ser iguais';
  }

  async function handleSubmit() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const credentials = await handleCredentials();
      if (credentials) {
        navigation.navigate('DadosPessoais');
      }
    }
  }

  async function handleCredentials() {
    const credentials = await storeCredentials(email, senha);
    return credentials;
  }

  function handleSecureSenha() {
    setOlhoIcone(!olhoIcone);
  }
  function handleSecureSenhaConfirma() {
    setOlhoIconeConfirma(!olhoIconeConfirma);
  }

  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 70,
          marginTop: 22,
        }}>
        <Image
          source={require('../../../../assets/images/checkEmpty.png')}
          style={{width: 46, height: 47}}
        />
        <Image
          source={require('../../../../assets/images/checkEmpty.png')}
          style={{width: 46, height: 47}}
        />
        <Image
          source={require('../../../../assets/images/checkEmpty.png')}
          style={{width: 46, height: 47}}
        />
      </View>
      <Image
        source={require('../../../../assets/images/cadastro1.png')}
        style={{
          alignSelf: 'center',
          width: 80,
          height: 180,
          marginTop: 6,
          marginBottom: 26,
        }}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <InputContainer>
          <InputIcon source={require('../../../../assets/images/email.png')} />
          <InputText
            placeholder="exemplo@email.com"
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>
        {errors.email && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.email}
          </Text>
        )}
        <InputContainer>
          <InputIcon source={require('../../../../assets/images/senha.png')} />
          <InputText
            placeholder="senha"
            secureTextEntry={olhoIcone}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={handleSecureSenha}>
            {olhoIcone ? (
              <InputIcon
                source={require('../../../../assets/images/eye-slashed.png')}
              />
            ) : (
              <InputIcon
                source={require('../../../../assets/images/eye.png')}
              />
            )}
          </TouchableOpacity>
        </InputContainer>
        {errors.password && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.password}
          </Text>
        )}
        <InputContainer>
          <InputIcon source={require('../../../../assets/images/senha.png')} />
          <InputText
            placeholder="confirmar senha"
            secureTextEntry={olhoIconeConfirma}
            value={senhaConfirma}
            onChangeText={setSenhaConfirma}
          />
          <TouchableOpacity onPress={handleSecureSenhaConfirma}>
            {olhoIconeConfirma ? (
              <InputIcon
                source={require('../../../../assets/images/eye-slashed.png')}
              />
            ) : (
              <InputIcon
                source={require('../../../../assets/images/eye.png')}
              />
            )}
          </TouchableOpacity>
        </InputContainer>
        {errors.passwordConfirm && (
          <Text style={{fontSize: 12, color: colors.red, marginTop: -10}}>
            {errors.passwordConfirm}
          </Text>
        )}
      </View>
      <Botao texto="Continuar" handleSubmit={handleSubmit} />
    </View>
  );
};

export default Tela1;
