import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {AuthContext} from '../../services/context/authContext';
import {useToken} from '../../services/context/tokenContext';
import {SafeAreaView} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantCard from './components/RestaurantCard';
import {RestaurantsData} from '../../types/restaurantData';
import {
  getRestaurants,
  getRestaurantsFiltered,
} from '../../services/api/restaurantes';
import {
  SearchBarContainer,
  SearchInput,
} from '../../components/SearchBar/styles';
import ListEmptyComponent from './components/ListEmptyComponent';
import FooterList from './components/FooterList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DELAY = 1500;

const Home: React.FC = ({navigation}: any) => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  const {token} = useToken();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RestaurantsData[]>([]);
  const [shownData, setShownData] = useState<RestaurantsData[]>([]);
  const [endedList, setEndedList] = useState(false);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [filterPage, setFilterPage] = useState(0);

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
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
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
      <View style={{flex: 1}}>
        <FlatList
          data={shownData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <RestaurantCard data={item} navigation={navigation} />
          )}
          numColumns={2}
          onEndReached={onEnd}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            <FooterList load={loading} shownData={shownData.length === 0} />
          }
          ListEmptyComponent={<ListEmptyComponent />}
        />
        <View style={{height: 60, width: '100%'}} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
