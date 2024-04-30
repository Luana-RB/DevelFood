import {PlateData, RestaurantData} from './restaurantData';

export interface RequestDateData {
  id: string;
  date: string;
  requestItems: RequestData[];
}

export interface RequestData {
  restaurantId?: string;
  restaurant?: RestaurantData;
  plates: PlateData[];
  itemsList?: PlateData[];
  date: string;
  paymentType: string;
  id?: string;
  fullPrice?: number;
  status?: string;
  addressId: string;
}
export interface RequestSendData {
  restaurantId: string;
  requestPlates: RequestPlatesData[];
  date?: string;
  paymentType: string;
  id?: string;
  fullPrice?: number;
  status?: string;
  addressId?: string;
}

export interface RequestPlatesData {
  plateId: string;
  restaurantId?: string;
  quantity: number;
  observation?: string;
}
