import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CategoryCard from '../CategoryCard';
import {colors} from '../../globalStyles';

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
      <Text
        style={{
          color: colors.black,
          fontSize: 16,
          margin: 12,
        }}>
        Categorias
      </Text>
      <FlatList
        style={{marginHorizontal: 5}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CategoryCard name={item.name} />}
        horizontal
      />
    </View>
  );
};

export default CategoryList;
