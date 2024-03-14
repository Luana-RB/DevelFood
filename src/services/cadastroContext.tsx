import React, {createContext, useContext, useEffect, useState} from 'react';
import {UsersData} from '../views/Login';

type CadastroContextType = {
  cadastro: UsersData | null | undefined;
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
  const [cadastro, setCadastro] = useState<UsersData>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [id, setId] = useState('');
  const [apelido, setApelido] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [num, setNum] = useState('');

  useEffect(() => {
    function createId() {
      const thisId = String(Math.random());
      setId(thisId);
    }
    createId();
    loadCadastro(
      id,
      email,
      senha,
      nome,
      sobrenome,
      cpf,
      telefone,
      apelido,
      cep,
      rua,
      cidade,
      bairro,
      estado,
      num,
    );
  }, []);

  const loadCadastro = (
    id: string,
    email: string,
    senha: string,
    nome: string,
    sobrenome: string,
    cpf: string,
    telefone: string,
    apelido: string,
    cep: string,
    rua: string,
    cidade: string,
    bairro: string,
    estado: string,
    num: string,
  ) => {
    const cadastro = {
      id,
      email,
      senha,
      nome,
      sobrenome,
      cpf,
      telefone,
      apelido,
      cep,
      rua,
      cidade,
      bairro,
      estado,
      num,
    };
    console.log(cadastro);
    setCadastro(cadastro);
  };

  const storeCredentials = async (newEmail: string, newSenha: string) => {
    try {
      setEmail(newEmail);
      setSenha(newSenha);
      loadCadastro(
        id,
        newEmail,
        newSenha,
        nome,
        sobrenome,
        cpf,
        telefone,
        apelido,
        cep,
        rua,
        cidade,
        bairro,
        estado,
        num,
      );
      return newEmail + newSenha;
    } catch (e) {
      return e;
    }
  };

  const storeInfo = async (
    newNome: string,
    newSobrenome: string,
    newCpf: string,
    newTelefone: string,
  ) => {
    try {
      setNome(newNome);
      setSobrenome(newSobrenome);
      setCpf(newCpf);
      setTelefone(newTelefone);
      loadCadastro(
        id,
        email,
        senha,
        newNome,
        newSobrenome,
        newCpf,
        newTelefone,
        apelido,
        cep,
        rua,
        cidade,
        bairro,
        estado,
        num,
      );
      return newNome;
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
      loadCadastro(
        id,
        email,
        senha,
        nome,
        sobrenome,
        cpf,
        telefone,
        newApelido,
        newCep,
        newRua,
        newCidade,
        newBairro,
        newEstado,
        newNum,
      );
      return newApelido;
    } catch (e) {
      return e;
    }
  };

  return (
    <CadastroContext.Provider
      value={{cadastro, storeCredentials, storeInfo, storeEndereco}}>
      {children}
    </CadastroContext.Provider>
  );
};
