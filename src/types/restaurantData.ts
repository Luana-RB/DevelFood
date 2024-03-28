export interface RestaurantsData {
  id: string;
  nome: string;
  cnpj: string;
  telefone: string;
  fotos: string;
}

export interface RestaurantCredentials {
  id: string;
}

export interface RestaurantInfo {
  name: string;
  cnpj: string;
  category: string;
  imageUrl?: string;
  rating: number;
}
export interface RestaurantPlate {
  name: string;
  price: string;
  description: string;
  imageUrl?: string;
}

export interface RestaurantAdress {
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  estado: string;
  num: string;
}
