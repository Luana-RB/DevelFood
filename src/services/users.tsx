import {users} from '../mocks/users';
import {UsersData} from '../views/Login';

export function getUsers() {
  try {
    return users;
  } catch (e) {
    console.log(e);
  }
}

export function postUser(user: UsersData) {
  try {
    const userData = {
      ...user,
      id: user.id || String(Math.random()),
    };
    users.push(userData);
  } catch (e) {
    console.log(e);
  }
}

export function getUserById(id: string) {
  try {
    const user = users.find(user => user.id === id);
    return user;
  } catch (e) {
    console.log('Usuário não encontrado', e);
  }
}

export function getUserToken(email: string) {
  try {
    const user = users.find(user => user.email === email);
    return user ? user.id : null;
  } catch (e) {
    console.log('Usuário não encontrado', e);
  }
}
