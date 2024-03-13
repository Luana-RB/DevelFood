import {users} from '../mocks/users';

export function getUsers() {
  try {
    return users;
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
