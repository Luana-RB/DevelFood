import {RestaurantPlate} from './restaurantData';

export interface UsersData {
  credentials: UserCredentials;
  info: UserInfo;
  adress: UserAdress;
  favorites: RestaurantPlate[];
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
