import React, {createContext, useContext, useState} from 'react';
import {UsersData} from '../../types/userData';

type ForgotPasswordContextType = {
  user: UsersData;
  token: string;
  storeUser: (user: UsersData) => Promise<true | undefined>;
  returnsUser: () => UsersData | undefined;
  storeToken: (token: string) => Promise<void>;
};

const ForgotPasswordContext = createContext<
  ForgotPasswordContextType | undefined
>(undefined);

export const useForgotPassword = () => {
  const context = useContext(ForgotPasswordContext);
  if (!context) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
};

export const ForgotPasswordProvider = ({children}: any) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<UsersData>({
    credentials: {id: '', email: '', password: ''},
    info: {name: '', surname: '', cpf: '', cellphone: ''},
    adress: {
      apelido: '',
      cep: '',
      rua: '',
      cidade: '',
      bairro: '',
      estado: '',
      num: '',
    },
  });

  const returnsUser = () => {
    if (user.credentials.id) {
      const thisUser = user;
      cleanContext();
      return thisUser;
    }
  };

  const cleanContext = () => {
    setToken('');
    setUser({
      credentials: {id: '', email: '', password: ''},
      info: {name: '', surname: '', cpf: '', cellphone: ''},
      adress: {
        apelido: '',
        cep: '',
        rua: '',
        cidade: '',
        bairro: '',
        estado: '',
        num: '',
      },
    });
  };

  const storeUser = async (user: UsersData) => {
    try {
      setUser(user);
      return true;
    } catch (e) {
      console.log('Falha ao salvar user na recuperação de senha');
    }
  };
  const storeToken = async (token: string) => {
    try {
      setToken(token);
    } catch (e) {
      console.log('Falha ao salvar token na recuperação de senha');
    }
  };

  return (
    <ForgotPasswordContext.Provider
      value={{
        token,
        user,
        returnsUser,
        storeUser,
        storeToken,
      }}>
      {children}
    </ForgotPasswordContext.Provider>
  );
};
