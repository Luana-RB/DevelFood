import {users} from '../../mocks/users';
import {NewUsersData, UsersData} from '../../types/userData';
import {api} from './api';

export async function postCadastro(user: NewUsersData) {
  try {
    // const result = users.push(user);
    const result = await api.post('api/auth/cliente/cadastro', user);
    const status = result.status;
    return true;
  } catch (e) {
    console.log('cadastro: ', e);
  }
}

export async function postLogin(email: string, password: string) {
  try {
    const credentials = {
      email,
      password,
    };
    const result = await api.post('api/auth/login', credentials);
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

// export function getUserToken(email: string) {
//   try {
//     const user = users.find(user => user.credentials.email === email);
//     return user ? user.credentials.id : null;
//   } catch (e) {
//     console.log('Usuário não encontrado', e);
//   }
// }

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
