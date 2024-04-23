import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {RestaurantsData} from '../../../../types/restaurantData';
import {getRestaurants} from '../../../../services/api/restaurants';
import {
  SearchBarContainer,
  SearchInput,
} from '../../../../components/SearchBar/styles';
import {colors} from '../../../../globalStyles';
import RestaurantCard from './RestaurantCard';
import {getRestaurantsFiltered} from '../../../../services/api/restaurants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterList from './FooterList';
import ListEmptyComponent from '../../../../components/ListEmptyComponent';
import AddressBanner from '../AddressBanner';
import BannerCarrossel from '../BannerCarrossel';
import {sales} from '../../../../mocks/sales';
import CategoryList from '../../../../components/CategoryList';
const DELAY = 1500;

interface RestaurantListProps {
  navigation: any;
}
const RestaurantList: React.FC<RestaurantListProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RestaurantsData[]>([]);
  const [shownData, setShownData] = useState<RestaurantsData[]>([]);
  const [endedList, setEndedList] = useState(false);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [filterPage, setFilterPage] = useState(0);

  useEffect(() => {
    handleAll(filter);
  }, []);

  async function loadAPI() {
    const restaurantes = await getRestaurants({page});
    setPage(page + 7);
    return restaurantes;
  }

  async function loadSearch(filter: string) {
    const newData = await getRestaurantsFiltered({page: filterPage, filter});
    //setFilterPage(filterPage + 1);
    if (newData) {
      if (newData.length === 0) {
        return [];
      } else {
        return newData;
      }
    }
  }

  async function handleAll(filter: string) {
    if (filter.length < 2) {
      setShownData(data);
      if (loading || endedList) return;
      setLoading(true);
      setShownData(data);
      const restaurantList = await loadAPI();
      if (!restaurantList) {
        setEndedList(true);
        setLoading(false);
        return;
      }
      if (restaurantList.length === 0) setEndedList(true);
      setData([...data, ...restaurantList]);
      setShownData([...data, ...restaurantList]);
    } else {
      const restaurantList = await loadSearch(filter);
      if (!restaurantList) return;
      setShownData(restaurantList);
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
    <View style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <View>
            <AddressBanner />
            <BannerCarrossel data={sales} navigation={navigation} />
            <CategoryList />
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
          </View>
        }
        data={shownData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        onEndReached={onEnd}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={<ListEmptyComponent />}
        ListFooterComponent={
          <FooterList load={loading} shownData={shownData.length === 0} />
        }
        renderItem={({item}) => (
          <RestaurantCard data={item} navigation={navigation} />
        )}
      />
      <View style={{height: 60, width: '100%'}} />
    </View>
  );
};

export default RestaurantList;
