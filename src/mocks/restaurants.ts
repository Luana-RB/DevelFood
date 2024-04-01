import {RestaurantsData} from '../types/restaurantData';

export const restaurants: RestaurantsData[] = [
  {
    credentials: {
      id: '1',
    },
    info: {
      name: 'Pizza Palace',
      cnpj: '12345678901234',
      category: 'Pizza',
      imageUrl:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5.0,
    },
    adress: {
      cep: '12345-678',
      rua: 'Rua das Pizzas',
      cidade: 'São Paulo',
      bairro: 'Jardim Paulista',
      estado: 'SP',
      num: '123',
    },
    plates: [
      {
        name: 'Margherita',
        price: '25.00',
        description:
          'Classic pizza with tomato sauce, mozzarella cheese, and basil.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Pepperoni',
        price: '30.00',
        description:
          'Pizza with pepperoni, mozzarella cheese, and tomato sauce.',
        imageUrl:
          'https://images.unsplash.com/photo-1617424771170-d333ef3d93d8?q=80&w=1670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '2',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '98765432109876',
      category: 'Sushi',
      imageUrl:
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.0,
    },
    adress: {
      cep: '98765-432',
      rua: 'Rua dos Sushis',
      cidade: 'Rio de Janeiro',
      bairro: 'Lagoa',
      estado: 'RJ',
      num: '456',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1670333291474-cb722ca783a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '3',
    },
    info: {
      name: 'Burger Bistro',
      cnpj: '11223344556677',
      category: 'Hamburguer',
      rating: 5.5,
    },
    adress: {
      cep: '11223-344',
      rua: 'Rua dos Burgers',
      cidade: 'Belo Horizonte',
      bairro: 'Centro',
      estado: 'MG',
      num: '789',
    },
    plates: [
      {
        name: 'Cheeseburger',
        price: '10.00',
        description: 'Burger with cheese, lettuce, tomato, and pickles.',
        imageUrl:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Big Burger',
        price: '12.00',
        description:
          'Burger with lettuce, tomato, pickles, and a variety of vegetables.',
        imageUrl:
          'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '4',
    },
    info: {
      name: 'Pasta Paradise',
      cnpj: '22334455667788',
      category: 'Almoço',
      imageUrl:
        'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5.0,
    },
    adress: {
      cep: '22334-556',
      rua: 'Rua das Pastrami',
      cidade: 'Curitiba',
      bairro: 'Centro',
      estado: 'PR',
      num: '1011',
    },
    plates: [
      {
        name: 'Carbonara',
        price: '20.00',
        description: 'Pasta with bacon, eggs, and parmesan cheese.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1661293877589-b03a9e8fe30e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Spaghetti Carbonara',
        price: '22.00',
        description: 'Spaghetti with bacon, eggs, and parmesan cheese.',
        imageUrl:
          'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '5',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '6',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '7',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '8',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '9',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '10',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '11',
    },
    info: {
      name: 'Burger Bistro',
      cnpj: '11223344556677',
      category: 'Hamburguer',
      rating: 5.5,
    },
    adress: {
      cep: '11223-344',
      rua: 'Rua dos Burgers',
      cidade: 'Belo Horizonte',
      bairro: 'Centro',
      estado: 'MG',
      num: '789',
    },
    plates: [
      {
        name: 'Cheeseburger',
        price: '10.00',
        description: 'Burger with cheese, lettuce, tomato, and pickles.',
        imageUrl:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Big Burger',
        price: '12.00',
        description:
          'Burger with lettuce, tomato, pickles, and a variety of vegetables.',
        imageUrl:
          'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '12',
    },
    info: {
      name: 'Pasta Paradise',
      cnpj: '22334455667788',
      category: 'Almoço',
      imageUrl:
        'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5.0,
    },
    adress: {
      cep: '22334-556',
      rua: 'Rua das Pastrami',
      cidade: 'Curitiba',
      bairro: 'Centro',
      estado: 'PR',
      num: '1011',
    },
    plates: [
      {
        name: 'Carbonara',
        price: '20.00',
        description: 'Pasta with bacon, eggs, and parmesan cheese.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1661293877589-b03a9e8fe30e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Spaghetti Carbonara',
        price: '22.00',
        description: 'Spaghetti with bacon, eggs, and parmesan cheese.',
        imageUrl:
          'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '13',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '14',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '15',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '16',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '17',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '18',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '19',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '20',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '21',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '22',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '23',
    },
    info: {
      name: 'Burger Bistro',
      cnpj: '11223344556677',
      category: 'Hamburguer',
      rating: 5.5,
    },
    adress: {
      cep: '11223-344',
      rua: 'Rua dos Burgers',
      cidade: 'Belo Horizonte',
      bairro: 'Centro',
      estado: 'MG',
      num: '789',
    },
    plates: [
      {
        name: 'Cheeseburger',
        price: '10.00',
        description: 'Burger with cheese, lettuce, tomato, and pickles.',
        imageUrl:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Big Burger',
        price: '12.00',
        description:
          'Burger with lettuce, tomato, pickles, and a variety of vegetables.',
        imageUrl:
          'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '24',
    },
    info: {
      name: 'Pasta Paradise',
      cnpj: '22334455667788',
      category: 'Almoço',
      imageUrl:
        'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5.0,
    },
    adress: {
      cep: '22334-556',
      rua: 'Rua das Pastrami',
      cidade: 'Curitiba',
      bairro: 'Centro',
      estado: 'PR',
      num: '1011',
    },
    plates: [
      {
        name: 'Carbonara',
        price: '20.00',
        description: 'Pasta with bacon, eggs, and parmesan cheese.',
        imageUrl:
          'https://plus.unsplash.com/premium_photo-1661293877589-b03a9e8fe30e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Spaghetti Carbonara',
        price: '22.00',
        description: 'Spaghetti with bacon, eggs, and parmesan cheese.',
        imageUrl:
          'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    credentials: {
      id: '25',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '26',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '27',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '28',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
  {
    credentials: {
      id: '29',
    },
    info: {
      name: 'Tacos',
      cnpj: '33445566778899',
      category: 'Almoço',
      rating: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '33445-667',
      rua: 'Rua dos Tacos',
      cidade: 'Porto Alegre',
      bairro: 'São Geraldo',
      estado: 'RS',
      num: '1213',
    },
    plates: [
      {
        name: 'Carnitas Taco',
        price: '15.00',
        description: 'Taco with carnitas (pork), lettuce, tomato, and pickles.',
      },
      {
        name: 'Beef Taco',
        price: '17.00',
        description: 'Taco with beef, lettuce, tomato, and pickles.',
      },
    ],
  },
  {
    credentials: {
      id: '30',
    },
    info: {
      name: 'Sushi Sensation',
      cnpj: '44556677889900',
      category: 'Sushi',
      rating: 1.0,
      imageUrl:
        'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    adress: {
      cep: '44556-778',
      rua: 'Rua dos Sushis',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      estado: 'PE',
      num: '1415',
    },
    plates: [
      {
        name: 'California Roll',
        price: '15.00',
        description: 'Sushi roll with crab, avocado, and cucumber.',
      },
      {
        name: 'Tekka Maki',
        price: '18.00',
        description: 'Sushi roll with salmon, avocado, and cucumber.',
      },
    ],
  },
];
