import {RestaurantPlate} from './restaurantData';

export interface UsersData {
  credentials: UserCredentials;
  info: UserInfo;
  address: UserAddress;
  favorites?: RestaurantPlate[];
}

export interface NewUsersData {
  email: string;
  senha: string;
  primeiroNome: string;
  segundoNome: string;
  cpf: string;
  numeroCelular: string;
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  estado: string;
  numero: number;
}
export interface UserCredentials {
  id: string;
  email: string;
  password: string;
}

export interface UserInfo {
  name: string;
  surname: string;
  cpf: string;
  cellphone: string;
}

export interface UserAddress {
  apelido: string;
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  estado: string;
  num: string;
}
