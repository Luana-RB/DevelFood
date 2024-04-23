import {users} from '../../mocks/users';
import {NewUsersData, UsersData} from '../../types/userData';
import {api, getToken} from './api';

export async function postCadastro(user: NewUsersData) {
  try {
    // const result = users.push(user);
    const result = await api.post('/cliente/registrar/cliente', user);
    const status = result.status;
    return true;
  } catch (e) {
    console.log('cadastro: ', e);
    return false;
  }
}

export async function postLogin(email: string, senha: string) {
  try {
    const credentials = {
      email,
      senha,
    };
    const result = await api.post('/login/efetuar', credentials);
    const token = JSON.stringify(result.data.token).replace(/"/g, '');
    return token;
    //    const user = users.find(user => user.credentials.email === email);
    // if (user?.credentials.password === password) return user.credentials.id;
  } catch (e) {
    console.log('login', e);
    return undefined;
  }
}

export function patchPassword(user: UsersData, password: string) {
  try {
  } catch (e) {}
}

export async function checkEmail(email: string) {
  try {
    const body = {
      email,
    };
    const result = await api.post('/cliente/email', body);
    if (result.status === 200) return true;
    else return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function checkCpf(cpf: string) {
  try {
    const body = {
      cpf,
    };
    const result = await api.post('/cliente/cpf', body);
    if (result.status === 200) return true;
    else return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function checkPhone(phone: string) {
  try {
    const body = {
      numeroCelular: phone,
    };
    const result = await api.post('/cliente/telefone', body);
    if (result.status === 200) return true;
    else return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export function sendToken() {
  try {
    const code = 'codigu';
    return code;
  } catch (e) {
    console.log(e);
  }
}

export function sendNumberCode() {
  try {
    const code = '1111';
    return code;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserData() {
  // const header = await getToken();
  // const user = await api.get(`/cliente`, header);
  // return user.data;
  return users[0];
}
