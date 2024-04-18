import {users} from '../../mocks/users';
import {NewUsersData, UsersData} from '../../types/userData';
import {api} from './api';

export async function postCadastro(user: NewUsersData) {
  try {
    // const result = users.push(user);
    const result = await api.post('login/registrar/cliente', user);
    const status = result.status;
    console.log(user, status);
    return true;
  } catch (e) {
    console.log('cadastro: ', e);
  }
}

export async function postLogin(user: UsersData) {
  try {
    const credentials = {
      email: user.credentials.email,
      senha: user.credentials.password,
    };
    const result = await api.post('login/efetuar', credentials);
    console.log(result.status);
    return result;
  } catch (e) {
    console.log('login', e);
  }
}

export function patchPassword(user: UsersData, password: string) {
  try {
    const userId = user.credentials.id;
    const users = getUsers();
    if (users) {
      const foundUser = users.find(user => user.credentials.id == userId);
      if (foundUser) {
        foundUser.credentials.password = password;
        return true;
      }
    }
  } catch (e) {}
}

export function getUsers() {
  try {
    return users;
  } catch (e) {
    console.log(e);
  }
}

export function getUserById(id: string) {
  try {
    const users = getUsers();
    if (users) {
      const user = users.find(user => user.credentials.id === id);
      return user;
    }
  } catch (e) {
    console.log('Usuário não encontrado', e);
  }
}

export function getUserToken(email: string) {
  try {
    const user = users.find(user => user.credentials.email === email);
    return user ? user.credentials.id : null;
  } catch (e) {
    console.log('Usuário não encontrado', e);
  }
}

export function findUserIdByEmail(email: string) {
  try {
    const users = getUsers();
    const user = users?.find(user => user.credentials.email === email);
    return user ? user.credentials.id : undefined;
  } catch (e) {
    console.log(e);
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
