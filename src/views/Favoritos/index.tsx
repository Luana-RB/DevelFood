import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import CategoryList from '../../components/CategoryList';
import PlateCard from '../../components/PlateCard';
import {Container} from './styles';
import {getFavorites} from '../../services/api/favorites';
import SearchBar from '../../components/SearchBar';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {useFocusEffect} from '@react-navigation/native';
import {PlateData} from '../../types/restaurantData';
import {Favorites} from '../../types/userData';
import {getPlateDataById} from '../../services/api/plates';

const Favoritos: React.FC = ({navigation}: any) => {
  const [data, setData] = useState<(PlateData | undefined)[]>([]);
  const [shownData, setShownData] = useState<(PlateData | undefined)[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      getFavoritesData();
    }, []),
  );

  async function getFavoritesData() {
    const favorites: Favorites[] | undefined = await getFavorites();
    if (favorites) {
      const platePromises = favorites.map(async plate => {
        const plateId = plate.plateId;
        const plateData = await getPlateDataById(plateId);
        return plateData;
      });

      const plates = await Promise.all(platePromises);
      setData(plates);
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
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => {
          return item ? (
            <PlateCard data={item} navigation={navigation} />
          ) : (
            <View />
          );
        }}
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
