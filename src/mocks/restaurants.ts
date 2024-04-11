import {RestaurantsData} from '../types/restaurantData';

export const restaurantsMock: RestaurantsData[] = [
  {
    id: '1',
    nome: 'Pizza Palace',
    cnpj: '12345678901234',
    telefone: '123-456-7890',
    categoria: 'Pizza',
    fotos:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {
        id: '101',
        nome: 'Margherita Pizza',
        descricao:
          'Uma pizza de camarão com fritas que é uma ótima opção para pedir quando se está com a família',
        preco: 49.9,
        restaurantId: '1',
        foto: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '102',
        nome: 'Pepperoni Pizza',
        descricao:
          'Uma pizza de camarão com fritas que é uma ótima opção para pedir quando se está com a família',
        preco: 49.9,
        restaurantId: '1',
      },
      {
        id: '103',
        nome: 'Hawaiian Pizza',
        descricao:
          'Uma pizza de camarão com fritas que é uma ótima opção para pedir quando se está com a família',
        preco: 49.9,
        restaurantId: '1',
      },
      {id: '104', nome: 'Hawaiian Pizza', restaurantId: '1'},
    ],
  },
  {
    id: '2',
    nome: 'Burger Bistro',
    cnpj: '23456789012345',
    telefone: '234-567-8901',
    categoria: 'Fast Food',
    fotos:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {
        id: '201',
        restaurantId: '2',
        nome: 'Classic Burger',
        foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {id: '202', nome: 'Cheeseburger', restaurantId: '2'},
      {id: '203', nome: 'Veggie Burger', restaurantId: '2'},
    ],
  },
  {
    id: '3',
    nome: 'Sushi Station',
    cnpj: '34567890123456',
    telefone: '345-678-9012',
    categoria: 'Sushi',
    fotos:
      'https://plus.unsplash.com/premium_photo-1670333291474-cb722ca783a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    nome: 'Pasta Place',
    cnpj: '45678901234567',
    telefone: '456-789-0123',
    categoria: 'Almoço',
    fotos:
      'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '401', nome: 'Spaghetti Carbonara', restaurantId: '4'},
      {id: '402', nome: 'Lasagna', restaurantId: '4'},
      {id: '403', nome: 'Penne Arrabbiata', restaurantId: '4'},
    ],
  },
  {
    id: '6',
    nome: 'Smoothies Shop',
    cnpj: '67890123456789',
    telefone: '678-901-2345',
    categoria: 'Sobremesa',
    pratos: [
      {id: '601', nome: 'Strawberry Smoothie', restaurantId: '6'},
      {id: '602', nome: 'Mango Smoothie', restaurantId: '6'},
      {id: '603', nome: 'Blueberry Smoothie', restaurantId: '6'},
    ],
  },
  {
    id: '7',
    nome: 'Coffee Corner',
    cnpj: '78901234567890',
    telefone: '789-012-3456',
    pratos: [
      {id: '701', nome: 'Espresso', restaurantId: '7'},
      {id: '702', nome: 'Latte', restaurantId: '7'},
      {id: '703', nome: 'Cappuccino', restaurantId: '7'},
    ],
  },
  {
    id: '8',
    nome: 'Doughnuts Den',
    cnpj: '89012345678901',
    telefone: '890-123-4567',
    categoria: 'Sobremesa',
    pratos: [
      {id: '801', nome: 'Glazed Doughnut', restaurantId: '8'},
      {id: '802', nome: 'Chocolate Glazed Doughnut', restaurantId: '8'},
      {id: '803', nome: 'Sprinkle Doughnut', restaurantId: '8'},
    ],
  },
  {
    id: '9',
    nome: 'Pizza Palace',
    cnpj: '12345678901234',
    telefone: '123-456-7890',
    categoria: 'Pizza',
    fotos:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '101', nome: 'Margherita Pizza', restaurantId: '9'},
      {id: '102', nome: 'Pepperoni Pizza', restaurantId: '9'},
      {id: '103', nome: 'Hawaiian Pizza', restaurantId: '9'},
    ],
  },
  {
    id: '10',
    nome: 'Burger Bistro',
    cnpj: '23456789012345',
    telefone: '234-567-8901',
    categoria: 'Fast Food',
    fotos:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '201', nome: 'Classic Burger', restaurantId: '10'},
      {id: '202', nome: 'Cheeseburger', restaurantId: '10'},
      {id: '203', nome: 'Veggie Burger', restaurantId: '10'},
    ],
  },
];
