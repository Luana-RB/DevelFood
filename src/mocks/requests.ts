import {RequestData} from '../types/requestData';

export const requests: RequestData[] = [
  {
    id: '1',
    fullPrice: 100,
    date: 'Segunda-Feira',
    status: 'Pedido Finalizado',
    paymentType: 'dinheiro',
    restaurantId: '1',
    plates: [
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
    ],
  },

  {
    id: '2',
    fullPrice: 100,
    date: 'Segunda-Feira',
    restaurantId: '1',
    paymentType: 'dinheiro',
    status: 'Pedido Finalizado',
    plates: [
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
    ],
  },
  {
    id: '3',
    fullPrice: 100,
    date: 'Terça-Feira',
    paymentType: 'dinheiro',
    restaurantId: '2',
    status: 'Pedido Finalizado',
    plates: [
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '2',
      },
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '2',
      },
    ],
  },
];
