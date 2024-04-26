import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import CategoryList from '../../components/CategoryList';
import PlateCard from '../../components/PlateCard';
import {Container} from './styles';
import SearchBar from '../../components/SearchBar';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {useFocusEffect} from '@react-navigation/native';
import {PlateData} from '../../types/restaurantData';
import {Favorites} from '../../types/userData';
import {getPlateDataById} from '../../services/api/plates';
import {getFavoritePlates} from '../../services/api/favorites';

const Favoritos: React.FC = ({navigation}: any) => {
  const [data, setData] = useState<PlateData[]>([]);
  const [shownData, setShownData] = useState<PlateData[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      getFavoritesData();
    }, []),
  );

  async function getFavoritesData() {
    const favorites: Favorites[] | undefined = await getFavoritePlates();
    const plates: PlateData[] = [];
    if (favorites) {
      for (let i = 0; i < favorites.length; i++) {
        const plateId = favorites[i].id;
        const plateData = await getPlateDataById(plateId);
        if (plateData) plates.push(plateData);
      }
      console.log(plates);
      setData(plates);
      setShownData(plates);
    }
  }

  function handleSearch(text: string) {
    if (text.length < 2) {
      setShownData(data);
      return;
    }

    const newData = (data as PlateData[]).filter(item => {
      const itemData = item.name.toUpperCase();
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
