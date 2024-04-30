export interface RestaurantData {
  id: string;
  name: string;
  cnpj?: string;
  phone?: string;
  image?: string;
  rating: number;
  plates?: PlateData[];
  plateList?: PlateData[];
  address?: {
    addressId: string;
    cep: string;
    street: string;
    city: string;
    neigbourhood: string;
    state: string;
    number: string;
  };

  foodType?: {
    id: string;
    name: string;
  };
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
export interface PlateData {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  restaurantId: string;
  quantity?: number;
}

export interface RestaurantAdress {
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  estado: string;
  num: string;
}
