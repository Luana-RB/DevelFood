import React, {createContext, useContext, useState} from 'react';
import {UserStoreData} from '../../types/userData';

type ForgotPasswordContextType = {
  user: UserStoreData;
  token: string;
  storeUser: (user: UserStoreData) => Promise<true | undefined>;
  returnsUser: () => UserStoreData | undefined;
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
  const [user, setUser] = useState<UserStoreData>({
    credentials: {id: '', email: '', password: ''},
    info: {firstName: '', lastName: '', cpf: '', phone: ''},
    address: [
      {
        addressName: '',
        cep: '',
        street: '',
        city: '',
        neighbourhood: '',
        state: '',
        number: '',
      },
    ],
    favorites: [],
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
      info: {firstName: '', lastName: '', cpf: '', phone: ''},
      address: [
        {
          addressName: '',
          cep: '',
          street: '',
          city: '',
          neighbourhood: '',
          state: '',
          number: '',
        },
      ],
      favorites: [],
    });
  };

  const storeUser = async (user: UserStoreData) => {
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
