import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {colors, screenHeight} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import CategoryList from '../../components/CategoryList';
import PlateCard from '../../components/PlateCard';
import {Container} from './styles';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {useFocusEffect} from '@react-navigation/native';
import {PlateData} from '../../types/restaurantData';
import {Favorites} from '../../types/userData';
import {getPlateDataById} from '../../services/api/plates';
import {
  getFavoritePlates,
  getFavoritePlatesFiltered,
} from '../../services/api/favorites';
import {useCart} from '../../services/context/cartContext';
import CartBar from '../../components/CartBar';
import {
  SearchBarContainer,
  SearchInput,
} from '../../components/SearchBar/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DELAY = 1500;

const Favoritos: React.FC = ({navigation}: any) => {
  const [data, setData] = useState<PlateData[]>([]);
  const [shownData, setShownData] = useState<PlateData[]>([]);
  const [cart, setCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const {numOfItems} = useCart();
  const [endedList, setEndedList] = useState(false);

  useEffect(() => {
    if (numOfItems > 0) setCart(true);
    else setCart(false);
  }, [numOfItems, data]);

  useFocusEffect(
    React.useCallback(() => {
      setFilter('');
      handleAll('');
      setEndedList(false);
    }, []),
  );

  async function loadAPI() {
    const favorites = await getFavoritePlates(page);
    setPage(page + 5);
    return favorites;
  }
  async function loadSearch(filter: string) {
    const newData = await getFavoritePlatesFiltered(page, filter);
    //setFilterPage(filterPage + 1);
    if (newData) {
      if (newData.length === 0) {
        return [];
      } else {
        return newData;
      }
    }
  }

  async function getPlateData(favorites: Favorites[]) {
    const plates: PlateData[] = [];
    for (let i = 0; i < favorites.length; i++) {
      const plateId = favorites[i].id;
      const plateData = await getPlateDataById(plateId);
      if (plateData) plates.push(plateData);
    }
    return plates;
  }

  async function handleAll(filter: string) {
    if (filter.length < 2) {
      setShownData(data);
      if (loading || endedList) return;
      setLoading(true);
      const favorites = await loadAPI();
      if (!favorites) {
        setEndedList(true);
        setLoading(false);
        return;
      }
      if (favorites.length === 0) setEndedList(true);
      const plates = await getPlateData(favorites);
      setData([...data, ...plates]);
      setShownData([...data, ...plates]);
    } else {
      const favoritesFiltered = await loadSearch(filter);
      if (!favoritesFiltered) return;
      setShownData(favoritesFiltered);
    }
    setLoading(false);
  }

  function onEnd() {
    handleAll(filter);
  }

  const debounce = (
    func: {(filter: string): void; apply?: any},
    wait: number | undefined,
  ) => {
    let timeout: any;
    return (...args: any) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const debouncedWaitSearch = useCallback(
    debounce(filter => {
      setShownData([]);
      handleAll(filter);
    }, DELAY),
    [data],
  );

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <SearchBarContainer>
        <Icon
          name="magnify"
          size={30}
          color={colors.gray}
          style={{margin: 10}}
        />
        <SearchInput
          placeholder={'Buscar Restaurantes'}
          placeholderTextColor={colors.gray}
          value={filter}
          onChangeText={text => {
            setFilter(text);
            debouncedWaitSearch(text);
          }}
        />
      </SearchBarContainer>
      <View style={{height: 30}} />
      <View style={{flex: 6}}>
        <CategoryList />
        <FlatList
          style={{marginTop: 20}}
          data={shownData}
          onEndReached={onEnd}
          onEndReachedThreshold={0.2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PlateDetails', {
                  plate: item,
                  restaurantId: item.restaurantId,
                });
              }}>
              <PlateCard data={item} navigation={navigation} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <ListEmptyComponent
              text="Você não possui favoritos"
              imagePath="favorites"
            />
          }
          ListFooterComponent={<View style={{height: screenHeight * 0.18}} />}
        />
      </View>
      {cart && (
        <View
          style={{
            backgroundColor: colors.white,
            flex: 1.7,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <CartBar margin={20} navigation={navigation} />
        </View>
      )}
    </Container>
  );
};

export default Favoritos;
