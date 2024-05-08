import {UserData} from '../../types/userData';
import {api, getToken} from './api';

export async function postCadastro(user: any) {
  try {
    const result = await api.post('/cliente/registrar/cliente', user);
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
  } catch (e) {
    console.log('login', e);
    return undefined;
  }
}

export async function postPassword(email: string, password: string) {
  try {
    const senhaNova = {
      senhaNova: password,
    };
    const newPassword = await api.post(`/redefinir?email=${email}`, senhaNova);
    return newPassword;
  } catch (e) {
    console.log('put password', e);
  }
}

export async function sendEmail(email: string) {
  try {
    const body = {
      email,
    };
    const send = await api.post(`/esqueci`, body);
    return send;
  } catch (e) {
    console.log('send email', e);
  }
}

export async function verifyCode(email: string, code: string) {
  try {
    const verify = await api.get(`/verificar?email=${email}&codigo=${code}`);
    return verify.data;
  } catch (e) {
    console.log('verificar code', e);
  }
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

export async function getUserData() {
  try {
    const header = await getToken();
    const user = await api.get(`/cliente/visualizar`, header);
    return user.data;
  } catch (e) {
    console.log('user data ', e);
  }
}

export async function putUser(newUserData: UserData) {
  try {
    const newUser = {
      phone: newUserData.phone,
      photo: newUserData.image,
    };
    const header = await getToken();
    const response = await api.put('/cliente/atualizar', newUser, header);
    if (response.status === 200) return true;
  } catch (e) {
    console.log('put user ', e);
  }
}
