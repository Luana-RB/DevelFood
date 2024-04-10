import {UsersData} from '../types/userData';

export const users: UsersData[] = [
  {
    credentials: {
      id: '1',
      email: 'email@gmail.com',
      password: '123456',
    },
    info: {
      name: 'John',
      surname: 'Doe',
      cpf: '123.456.789-00',
      cellphone: '+1234567890',
    },
    adress: {
      apelido: 'Home',
      cep: '12345-678',
      rua: 'Main Street',
      cidade: 'New York',
      bairro: 'Downtown',
      estado: 'NY',
      num: '123',
    },
    favorites: [
      {
        foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        id: '201',
        nome: 'Classic Burger',
        restaurantId: '2',
        preco: 1.0,
      },
    ],
  },
  {
    credentials: {
      id: '2',
      email: 'email2@gmail.com',
      password: '123456',
    },
    info: {
      name: 'Jane',
      surname: 'Doe',
      cpf: '987.654.321-00',
      cellphone: '+0987654321',
    },
    adress: {
      apelido: 'Work',
      cep: '54321-098',
      rua: 'Broadway',
      cidade: 'Los Angeles',
      bairro: 'Hollywood',
      estado: 'CA',
      num: '456',
    },
    favorites: [],
  },
];
