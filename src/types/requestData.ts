import {PlateData, Restaurant} from './restaurantData';

export interface RequestDateData {
  id: string;
  date: string;
  requests: RequestData[];
}

export interface RequestData {
  restaurantId?: string;
  plates: PlateData[];
  date: string;
  paymentType: string;
  id?: string;
  fullPrice?: number;
  status?: string;
  addressId: string;
}
export interface RequestSendData {
  restaurantId: string;
  plates: RequestPlatesData[];
  date?: string;
  paymentType: string;
  id?: string;
  fullPrice?: number;
  status?: string;
  addressId?: string;
}

export interface RequestPlatesData {
  id: string;
  restaurantId?: string;
  quantity: number;
  observation?: string;
}
