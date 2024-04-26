import React, {createContext, useContext, useState} from 'react';
import {UserAddress, UserCredentials, UserInfo} from '../../types/userData';

type CadastroContextType = {
  storeCredentials: (newEmail: string, newPassword: string) => Promise<unknown>;
  storeInfo: (
    newFisrtName: string,
    newLastName: string,
    newCpf: string,
    newPhone: string,
  ) => Promise<unknown>;
  storeAddress: (
    newAddressName: string,
    newCep: string,
    newStreet: string,
    newCity: string,
    newNeighbourhood: string,
    newState: string,
    newNumber: string,
  ) => Promise<unknown>;
  returnsCadastro: () => {
    credentials: UserCredentials;
    info: UserInfo;
    address: UserAddress[];
  };
};

const CadastroContext = createContext<CadastroContextType | undefined>(
  undefined,
);

export const useCadastro = () => {
  const context = useContext(CadastroContext);
  if (!context) {
    throw new Error('useCadastro must be used within a CadastroProvider');
  }
  return context;
};

export const CadastroProvider = ({children}: any) => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
  });
  const [info, setInfo] = useState<UserInfo>({
    firstName: '',
    lastName: '',
    cpf: '',
    phone: '',
  });
  const [address, setAddress] = useState<UserAddress[]>([
    {
      addressName: '',
      cep: '',
      street: '',
      city: '',
      neighbourhood: '',
      state: '',
      number: '',
    },
  ]);

  const returnsCadastro = () => {
    const cadastro = {credentials, info, address};
    cleanContext();
    return cadastro;
  };

  const cleanContext = () => {
    setCredentials({
      email: '',
      password: '',
    });
    setInfo({
      firstName: '',
      lastName: '',
      cpf: '',
      phone: '',
    });
    setAddress([
      {
        addressName: '',
        cep: '',
        street: '',
        city: '',
        neighbourhood: '',
        state: '',
        number: '',
      },
    ]);
  };

  const storeCredentials = async (newEmail: string, newPassword: string) => {
    try {
      const newCredentials: UserCredentials = {
        email: newEmail,
        password: newPassword,
      };
      setCredentials(newCredentials);
      return newEmail;
    } catch (e) {
      return e;
    }
  };

  const storeInfo = async (
    newFirstName: string,
    newLastName: string,
    newCpf: string,
    newPhone: string,
  ) => {
    try {
      const newInfo: UserInfo = {
        firstName: newFirstName,
        lastName: newLastName,
        cpf: newCpf,
        phone: newPhone,
      };
      setInfo(newInfo);
      return newFirstName;
    } catch (e) {
      return e;
    }
  };

  const storeAddress = async (
    newAddressName: string,
    newCep: string,
    newStreet: string,
    newCity: string,
    newNeighbourhood: string,
    newState: string,
    newNumber: string,
  ) => {
    try {
      const newAdress: UserAddress[] = [
        {
          addressName: newAddressName,
          cep: newCep,
          street: newStreet,
          city: newCity,
          neighbourhood: newNeighbourhood,
          state: newState,
          number: newNumber,
        },
      ];
      setAddress(newAdress);
      return newAddressName;
    } catch (e) {
      return e;
    }
  };

  return (
    <CadastroContext.Provider
      value={{
        storeCredentials,
        storeInfo,
        storeAddress,
        returnsCadastro,
      }}>
      {children}
    </CadastroContext.Provider>
  );
};
