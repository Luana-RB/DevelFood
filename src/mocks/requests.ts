import {RequestData} from '../types/requestData';

export const requests: RequestData[] = [
  {
    id: '1',
    fullPrice: 60,
    date: 'Seg 02 abril 2022',
    status: 'PEDIDO_PRONTO',
    paymentType: 'dinheiro',
    restaurantId: '1',
    addressId: '1',
    plates: [
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
        quantity: 2,
        image:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '102',
        name: 'MCLanche Feliz',
        price: 10,
        quantity: 2,
        restaurantId: '1',
      },
      {
        id: '103',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '104',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '105',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
      {
        id: '106',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '1',
      },
    ],
  },

  {
    id: '2',
    fullPrice: 20,
    date: 'Seg 02 Fevereiro 2022',
    restaurantId: '1',
    paymentType: 'dinheiro',
    status: 'PEDIDO_REALIZADO',
    addressId: '1',
    plates: [
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        image:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        restaurantId: '1',
      },
      {
        id: '102',
        name: 'MCLanche Feliz',
        price: 10,
        image:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        restaurantId: '1',
      },
    ],
  },
  {
    id: '4',
    fullPrice: 20,
    date: 'Seg 02 Fevereiro 2022',
    restaurantId: '1',
    paymentType: 'dinheiro',
    status: 'PEDIDO_PRONTO',
    addressId: '1',
    plates: [
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        image:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        restaurantId: '1',
      },
      {
        id: '102',
        name: 'MCLanche Feliz',
        price: 10,
        image:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        restaurantId: '1',
      },
    ],
  },
  {
    id: '3',
    fullPrice: 20,
    date: 'Ter 03 abril 2022',
    paymentType: 'dinheiro',
    restaurantId: '2',
    addressId: '1',
    status: 'PEDIDO_EM_REALIZAÇÂO',
    plates: [
      {
        id: '101',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '2',
      },
      {
        id: '102',
        name: 'MCLanche Feliz',
        price: 10,
        restaurantId: '2',
      },
    ],
  },
];
