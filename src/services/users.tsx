import {users} from '../mocks/users';
import {UsersData} from '../types/userData';

export function getUsers() {
  try {
    return users;
  } catch (e) {
    console.log(e);
  }
}

export function postUser(user: UsersData) {
  try {
    const result = users.push(user);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export function getUserById(id: string) {
  try {
    const user = users.find(user => user.credentials.id === id);
    return user;
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
