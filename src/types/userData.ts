export interface UserData {
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cpf: string;
  phone: string;
  address: UserAddress[];
  favoritePlates: Favorites[];
  favoriteRestaurants: Favorites[];
}
export interface UserStoreData {
  credentials: UserCredentials;
  info: UserInfo;
  address: UserAddress[];
  favorites?: Favorites[];
}

export interface Favorites {
  id: string;
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
