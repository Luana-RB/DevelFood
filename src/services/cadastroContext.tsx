import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  UserAdress,
  UserCredentials,
  UserInfo,
  UsersData,
} from '../types/userData';

type CadastroContextType = {
  storeCredentials: (newEmail: string, newSenha: string) => Promise<unknown>;
  storeInfo: (
    newNome: string,
    newSobrenome: string,
    newCpf: string,
    newTelefone: string,
  ) => Promise<unknown>;
  storeEndereco: (
    newApelido: string,
    newCep: string,
    newRua: string,
    newCidade: string,
    newBairro: string,
    newEstado: string,
    newNum: string,
  ) => Promise<unknown>;
  returnsCadastro: () => {
    credentials: UserCredentials;
    info: UserInfo;
    adress: UserAdress;
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
  const [id, setId] = useState('');
  const [credentials, setCredentials] = useState<UserCredentials>({
    id: '',
    email: '',
    password: '',
  });
  const [info, setInfo] = useState<UserInfo>({
    name: '',
    surname: '',
    cpf: '',
    cellphone: '',
  });
  const [adress, setAdress] = useState<UserAdress>({
    apelido: '',
    cep: '',
    rua: '',
    cidade: '',
    bairro: '',
    estado: '',
    num: '',
  });

  useEffect(() => {
    function createId() {
      const thisId = String(Math.random());
      setId(thisId);
    }
    createId();
  }, []);

  const returnsCadastro = () => {
    const cadastro = {credentials, info, adress};
    cleanContext();
    return cadastro;
  };

  const cleanContext = () => {
    setId('');
    setCredentials({
      id: '',
      email: '',
      password: '',
    });
    setInfo({
      name: '',
      surname: '',
      cpf: '',
      cellphone: '',
    });
    setAdress({
      apelido: '',
      cep: '',
      rua: '',
      cidade: '',
      bairro: '',
      estado: '',
      num: '',
    });
  };

  const storeCredentials = async (newEmail: string, newPassword: string) => {
    try {
      const newCredentials = {id, email: newEmail, password: newPassword};
      setCredentials(newCredentials);
      return newEmail;
    } catch (e) {
      return e;
    }
  };

  const storeInfo = async (
    newName: string,
    newSurname: string,
    newCpf: string,
    newCellphone: string,
  ) => {
    try {
      const newInfo = {
        name: newName,
        surname: newSurname,
        cpf: newCpf,
        cellphone: newCellphone,
      };
      setInfo(newInfo);
      return newName;
    } catch (e) {
      return e;
    }
  };

  const storeEndereco = async (
    newApelido: string,
    newCep: string,
    newRua: string,
    newCidade: string,
    newBairro: string,
    newEstado: string,
    newNum: string,
  ) => {
    try {
      const newAdress = {
        apelido: newApelido,
        cep: newCep,
        rua: newRua,
        cidade: newCidade,
        bairro: newBairro,
        estado: newEstado,
        num: newNum,
      };
      setAdress(newAdress);
      return newApelido;
    } catch (e) {
      return e;
    }
  };

  return (
    <CadastroContext.Provider
      value={{
        storeCredentials,
        storeInfo,
        storeEndereco,
        returnsCadastro,
      }}>
      {children}
    </CadastroContext.Provider>
  );
};
