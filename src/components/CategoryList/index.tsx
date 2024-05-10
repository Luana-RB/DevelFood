import React from 'react';
import {FlatList, View} from 'react-native';
import CategoryCard from '../CategoryCard';

const CategoryList: React.FC = () => {
  interface CategoryData {
    id: string;
    name: string;
  }

  const data: CategoryData[] = [
    {
      id: '1',
      name: 'Pizza',
    },
    {
      id: '2',
      name: 'Sushi',
    },
    {
      id: '3',
      name: 'Almoço',
    },
    {
      id: '4',
      name: 'Massas',
    },
  ];

  return (
    <View>
      <FlatList
        style={{marginHorizontal: 5}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CategoryCard name={item.name} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;
