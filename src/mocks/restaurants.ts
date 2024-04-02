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
        description:
          'Um prato de camarão com fritas que é uma ótima opção para pedir quando se está com a família',
        fotos:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {id: '102', nome: 'Pepperoni Pizza'},
      {id: '103', nome: 'Hawaiian Pizza'},
      {id: '104', nome: 'Hawaiian Pizza'},
    ],
  },
  {
    id: '2',
    nome: 'Burger Bistro',
    cnpj: '23456789012345',
    telefone: '234-567-8901',
    fotos:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {
        id: '201',
        nome: 'Classic Burger',
        fotos:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {id: '202', nome: 'Cheeseburger'},
      {id: '203', nome: 'Veggie Burger'},
    ],
  },
  {
    id: '3',
    nome: 'Sushi Station',
    cnpj: '34567890123456',
    telefone: '345-678-9012',
    fotos:
      'https://plus.unsplash.com/premium_photo-1670333291474-cb722ca783a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    nome: 'Pasta Place',
    cnpj: '45678901234567',
    telefone: '456-789-0123',
    fotos:
      'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '401', nome: 'Spaghetti Carbonara'},
      {id: '402', nome: 'Lasagna'},
      {id: '403', nome: 'Penne Arrabbiata'},
    ],
  },
  {
    id: '6',
    nome: 'Smoothies Shop',
    cnpj: '67890123456789',
    telefone: '678-901-2345',
    pratos: [
      {id: '601', nome: 'Strawberry Smoothie'},
      {id: '602', nome: 'Mango Smoothie'},
      {id: '603', nome: 'Blueberry Smoothie'},
    ],
  },
  {
    id: '7',
    nome: 'Coffee Corner',
    cnpj: '78901234567890',
    telefone: '789-012-3456',
    pratos: [
      {id: '701', nome: 'Espresso'},
      {id: '702', nome: 'Latte'},
      {id: '703', nome: 'Cappuccino'},
    ],
  },
  {
    id: '8',
    nome: 'Doughnuts Den',
    cnpj: '89012345678901',
    telefone: '890-123-4567',
    pratos: [
      {id: '801', nome: 'Glazed Doughnut'},
      {id: '802', nome: 'Chocolate Glazed Doughnut'},
      {id: '803', nome: 'Sprinkle Doughnut'},
    ],
  },
  {
    id: '9',
    nome: 'Pizza Palace',
    cnpj: '12345678901234',
    telefone: '123-456-7890',
    fotos:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '101', nome: 'Margherita Pizza'},
      {id: '102', nome: 'Pepperoni Pizza'},
      {id: '103', nome: 'Hawaiian Pizza'},
    ],
  },
  {
    id: '10',
    nome: 'Burger Bistro',
    cnpj: '23456789012345',
    telefone: '234-567-8901',
    fotos:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '201', nome: 'Classic Burger'},
      {id: '202', nome: 'Cheeseburger'},
      {id: '203', nome: 'Veggie Burger'},
    ],
  },
  {
    id: '11',
    nome: 'Sushi Station',
    cnpj: '34567890123456',
    telefone: '345-678-9012',
    fotos:
      'https://plus.unsplash.com/premium_photo-1670333291474-cb722ca783a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '301', nome: 'Sashimi'},
      {id: '302', nome: 'Maki Roll'},
      {id: '303', nome: 'California Roll'},
    ],
  },
  {
    id: '12',
    nome: 'Pasta Place',
    cnpj: '45678901234567',
    telefone: '456-789-0123',
    fotos:
      'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '401', nome: 'Spaghetti Carbonara'},
      {id: '402', nome: 'Lasagna'},
      {id: '403', nome: 'Penne Arrabbiata'},
    ],
  },
  {
    id: '13',
    nome: 'Smoothies Shop',
    cnpj: '67890123456789',
    telefone: '678-901-2345',
    pratos: [
      {id: '601', nome: 'Strawberry Smoothie'},
      {id: '602', nome: 'Mango Smoothie'},
      {id: '603', nome: 'Blueberry Smoothie'},
    ],
  },
  {
    id: '14',
    nome: 'Coffee Corner',
    cnpj: '78901234567890',
    telefone: '789-012-3456',
    pratos: [
      {id: '701', nome: 'Espresso'},
      {id: '702', nome: 'Latte'},
      {id: '703', nome: 'Cappuccino'},
    ],
  },
  {
    id: '15',
    nome: 'Doughnuts Den',
    cnpj: '89012345678901',
    telefone: '890-123-4567',
    pratos: [
      {id: '801', nome: 'Glazed Doughnut'},
      {id: '802', nome: 'Chocolate Glazed Doughnut'},
      {id: '803', nome: 'Sprinkle Doughnut'},
    ],
  },
  {
    id: '16',
    nome: 'Pizza Palace',
    cnpj: '12345678901234',
    telefone: '123-456-7890',
    fotos:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '101', nome: 'Margherita Pizza'},
      {id: '102', nome: 'Pepperoni Pizza'},
      {id: '103', nome: 'Hawaiian Pizza'},
    ],
  },
  {
    id: '17',
    nome: 'Burger Bistro',
    cnpj: '23456789012345',
    telefone: '234-567-8901',
    fotos:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '201', nome: 'Classic Burger'},
      {id: '202', nome: 'Cheeseburger'},
      {id: '203', nome: 'Veggie Burger'},
    ],
  },
  {
    id: '18',
    nome: 'Sushi Station',
    cnpj: '34567890123456',
    telefone: '345-678-9012',
    fotos:
      'https://plus.unsplash.com/premium_photo-1670333291474-cb722ca783a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '301', nome: 'Sashimi'},
      {id: '302', nome: 'Maki Roll'},
      {id: '303', nome: 'California Roll'},
    ],
  },
  {
    id: '19',
    nome: 'Pasta Place',
    cnpj: '45678901234567',
    telefone: '456-789-0123',
    fotos:
      'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pratos: [
      {id: '401', nome: 'Spaghetti Carbonara'},
      {id: '402', nome: 'Lasagna'},
      {id: '403', nome: 'Penne Arrabbiata'},
    ],
  },
  {
    id: '20',
    nome: 'Smoothies Shop',
    cnpj: '67890123456789',
    telefone: '678-901-2345',
    pratos: [
      {id: '601', nome: 'Strawberry Smoothie'},
      {id: '602', nome: 'Mango Smoothie'},
      {id: '603', nome: 'Blueberry Smoothie'},
    ],
  },
  {
    id: '21',
    nome: 'Coffee Corner',
    cnpj: '78901234567890',
    telefone: '789-012-3456',
    pratos: [
      {id: '701', nome: 'Espresso'},
      {id: '702', nome: 'Latte'},
      {id: '703', nome: 'Cappuccino'},
    ],
  },
  {
    id: '22',
    nome: 'Doughnuts the end',
    cnpj: '89012345678901',
    telefone: '890-123-4567',
    pratos: [
      {id: '801', nome: 'Glazed Doughnut'},
      {id: '802', nome: 'Chocolate Glazed Doughnut'},
      {id: '803', nome: 'Sprinkle Doughnut'},
    ],
  },
];
