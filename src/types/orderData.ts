import {RestaurantPlate} from './restaurantData';

export interface OrderDateData {
  id: string;
  date: string;
  orderItems: OrderData[];
}

export interface OrderData {
  date: string;
  plates: RestaurantPlate[];
  id: string;
  fullPrice: number;
  status: string;
}
