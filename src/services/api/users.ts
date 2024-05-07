import {users} from '../../mocks/users';
import {UserData, UserStoreData} from '../../types/userData';
import {api, getToken} from './api';

export async function postCadastro(user: any) {
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

export async function postLogin(email: string, password: string) {
  try {
    const credentials = {
      email,
      password,
    };
    const result = await api.post('/login/efetuar', credentials);
    const token = JSON.stringify(result.data.token).replace(/"/g, '');
    return token;
    // const user = users.find(user => user.email === email);
    // if (user?.password === password) return 'user.credentials.id';
  } catch (e) {
    console.log('login', e);
    return undefined;
  }
}

export function patchPassword(user: UserStoreData, password: string) {
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
      phone,
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
  try {
    const header = await getToken();
    const user = await api.get(`/cliente/visualizar`, header);
    return user.data;
    // return users[0];
  } catch (e) {
    console.log('user data ', e);
  }
}

export async function patchUser(newUserData: UserData) {
  try {
    const newUser = {
      phone: newUserData.phone,
      photo: newUserData.image,
    };
    const header = await getToken();
    const response = await api.put('/cliente/atualizar', newUser, header);
    if (response.status === 200) return true;
    // users[0] = newUserData;
    // return true;
  } catch (e) {
    console.log('patch user ', e);
  }
}
