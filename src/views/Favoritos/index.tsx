import React, {useCallback, useEffect, useState} from 'react';
import {Favorites} from '../../types/userData';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Container} from './styles';
import {colors, screenHeight} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {
  SearchBarContainer,
  SearchInput,
} from '../../components/SearchBar/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryList from '../../components/CategoryList';
import PlateCard from '../../components/PlateCard';
import CartBar from '../../components/CartBar';
import {useFocusEffect} from '@react-navigation/native';
import {useCart} from '../../services/context/cartContext';
import {getFavoritePlates} from '../../services/api/favorites';
const DELAY = 1500;

const Favoritos: React.FC = ({navigation}: any) => {
  const [data, setData] = useState<any[]>([]);
  const [shownData, setShownData] = useState<any[]>([]);
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
      reset();
      handleAll('');
    }, []),
  );

  function reset() {
    setFilter('');
    setData([]);
    setShownData([]);
    setPage(0);
    setEndedList(false);
  }

  async function loadAPI() {
    const favorites = await getFavoritePlates(page);
    setPage(page + 1);
    return favorites;
  }
  async function loadSearch(filter: string) {
    return data;
  }

  async function getPlateData(favorites: Favorites[]) {
    const plates: any[] = [];
    for (let i = 0; i < favorites.length; i++) {
      const plate = {
        plate: favorites[i].pratoFavorito.plate,
        restaurantId: favorites[i].restaurante.id,
      };
      if (plate) plates.push(plate);
    }
    return plates;
  }

  async function handleAll(filter: string) {
    if (filter.length < 2) {
      setShownData(data);
      if (loading || endedList) return;
      setLoading(true);
      const favorites = await loadAPI();
      if (favorites) {
        const plates = await getPlateData(favorites);
        setData([...data, ...plates]);
        setShownData([...data, ...plates]);
      }
      if (!favorites) {
        setEndedList(true);
        setLoading(false);
        return;
      }
      if (favorites.length === 0) setEndedList(true);
    } else {
      const favoritesFiltered = await loadSearch(filter);
      if (!favoritesFiltered) return;
      setShownData(favoritesFiltered);
    }
    setLoading(false);
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
          placeholder={'Buscar Pratos Favoritos'}
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
          onEndReached={()=>handleAll(filter)}
          onEndReachedThreshold={0.2}
          keyExtractor={item => item.plate.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PlateDetails', {
                  plate: item.plate,
                  restaurantId: item.restaurantId,
                });
              }}>
              <PlateCard data={item.plate} restaurantId={item.restaurantId} />
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
