import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import CategoryList from '../../components/CategoryList';
import PlateCard from '../../components/PlateCard';
import {Container} from './styles';
import {getFavorites} from '../../services/api/favorites';
import {RestaurantPlate} from '../../types/restaurantData';
import SearchBar from '../../components/SearchBar';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {useFocusEffect} from '@react-navigation/native';

const Favoritos: React.FC = ({navigation}: any) => {
  const [data, setData] = useState<RestaurantPlate[]>();
  const [shownData, setShownData] = useState<RestaurantPlate[] | null>();

  useFocusEffect(
    React.useCallback(() => {
      const favorites = getFavorites();
      if (favorites) {
        setData([...favorites]);
        setShownData([...favorites]);
      }
    }, []),
  );

  function handleSearch(text: string) {
    if (text.length < 2) {
      setShownData(data);
      return;
    }

    const newData = data?.filter((item: {nome: string}) => {
      const itemData = item.nome.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setShownData(newData);
  }

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <SearchBar title={'Buscar em Favoritos'} onChangeText={handleSearch} />
      <View style={{height: 30}} />
      <CategoryList />
      <FlatList
        style={{marginTop: 20}}
        data={shownData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PlateCard data={item} navigation={navigation} />
        )}
        ListEmptyComponent={
          <ListEmptyComponent
            text="Você não possui favoritos"
            imagePath="favorites"
          />
        }
        ListFooterComponent={<View style={{height: 80}} />}
      />
    </Container>
  );
};

export default Favoritos;
