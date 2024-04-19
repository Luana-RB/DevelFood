import {RestaurantPlate} from './restaurantData';

// "email" : "vitor.arruda33234425@gmail.com",
// "senha" : "12345",
// "primeiroNome" : "Vito",
// "segundoNome" : "Arruda",
// "cpf": 71574757410,
// "numeroCelular" : "81984223077",
// "apelido" : "Casa 1",
// "cep" : "54753-442",
// "rua" : "Rua rui Barbosa",
// "cidade" : "Jp city",
// "bairro" : "Casa amararela",
// "estado" : "PE",
// "numero" : 590
export interface UsersData {
  credentials: UserCredentials;
  info: UserInfo;
  adress: UserAdress;
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

export interface UserAdress {
  apelido: string;
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  estado: string;
  num: string;
}
