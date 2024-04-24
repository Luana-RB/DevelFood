import {RestaurantPlate} from './restaurantData';

export interface OrderDateData {
  id: string;
  date: string;
  orderItems: OrderData[];
}

export interface OrderData {
  restaurantId: string;
  date: string;
  plates: RestaurantPlate[];
  id?: string;
  fullPrice?: number;
  status?: string;
}
