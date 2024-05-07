import {PlateData, Restaurant} from './restaurantData';

export interface UserData {
  id?: string;
  image?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cpf: string;
  phone: string;
  address: UserAddress[];
  favoritePlates?: Favorites[];
  favoriteRestaurants?: Favorites[];
}
export interface UserStoreData {
  credentials: UserCredentials;
  info: UserInfo;
  address: UserAddress[];
  favorites?: Favorites[];
}

export interface Favorites {
  pratoFavorito: PratoFavorito;
  restaurante: Restaurant;
}
export interface PratoFavorito {
  id: string;
  ativo: boolean;
  plate: PlateData;
}
export interface UserCredentials {
  id?: string;
  email: string;
  password: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  cpf: string;
  phone: string;
}

export interface UserAddress {
  addressName: string;
  addressId?: string;
  id?: string;
  cep: string;
  street: string;
  city: string;
  neighbourhood: string;
  state: string;
  number: string;
}
