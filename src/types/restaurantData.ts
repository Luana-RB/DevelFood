import {StackScreenProps} from '@react-navigation/stack';

export interface RestaurantsData {
  id?: string;
  nome: string;
  cnpj?: string;
  telefone?: string;
  fotos?: string;
  categoria?: string;
  pratos?: RestaurantPlate[];
  tipoComida?: {
    id: string;
    nome: string;
  };
  foodTypeName?: string;
  foodTypeId?: string;
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
  id: string;
  nome: string;
  preco?: number;
  descricao?: string;
  foto?: string;
}

export interface RestaurantAdress {
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  estado: string;
  num: string;
}

export type RootStackParamList = {
  PlateDetails: {prato: any; restaurant: any};
  Home: any;
  RestaurantProfile: any;
};

export type PlateDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'PlateDetails'
>;
