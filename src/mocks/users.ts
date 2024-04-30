import {UserData} from '../types/userData';

export const users: UserData[] = [
  {
    id: '1',
    email: 'email@gmail.com',
    password: '123456',

    firstName: 'John',
    lastName: 'Doe',
    cpf: '123.456.789-00',
    phone: '+1234567890',
    address: [
      {
        addressName: 'Home',
        addressId: '1',
        cep: '12345-678',
        street: 'Main Street',
        city: 'New York',
        neighbourhood: 'Downtown',
        state: 'NY',
        number: '123',
      },
    ],
    favoritePlates: [
      {id: '102'},
      {id: '401'},
      {id: '103'},
      {id: '201'},
      {id: '202'},
      {id: '203'},
      {id: '601'},
      {id: '602'},
    ],
    favoriteRestaurants: [{id: '2'}, {id: '3'}],
  },
  {
    id: '2',
    email: 'email2@gmail.com',
    password: '123456',

    firstName: 'Jane',
    lastName: 'Doe',
    cpf: '987.654.321-00',
    phone: '+0987654321',
    address: [
      {
        addressName: 'Work',
        addressId: '2',
        cep: '54321-098',
        street: 'Broadway',
        city: 'Los Angeles',
        neighbourhood: 'Hollywood',
        state: 'CA',
        number: '456',
      },
    ],
    favoritePlates: [],
    favoriteRestaurants: [],
  },
];
