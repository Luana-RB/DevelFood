import {SalesData} from '../types/salesData';
const image = '../../assets/images/example.png';

export const sales: SalesData[] = [
  {
    id: '1',
    imagePath: require(image),
    restaurantId: '1',
  },
  {
    id: '2',
    imagePath: require(image),
    restaurantId: '3',
  },
  {
    id: '3',
    imagePath: require(image),
    restaurantId: '2',
  },
];
