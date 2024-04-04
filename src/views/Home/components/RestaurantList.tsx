import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {RestaurantsData} from '../../../types/restaurantData';
import {getRestaurants} from '../../../services/api/restaurantes';
import sorter from '../../../utils/sorter';
import {
  SearchBarContainer,
  SearchIcon,
  SearchInput,
} from '../../../components/SearchBar/styles';
import {colors} from '../../../globalStyles';
import RestaurantCard from '../../../components/RestaurantCard';
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from '../../../components/NoResultCard';

export default function RestaurantList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RestaurantsData[]>([]);
  const [shownData, setShownData] = useState<RestaurantsData[]>([]);
  const [found, setFound] = useState(false);
  const [endedList, setEndedList] = useState(false);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (filter === '') {
      setShownData(data);
      handleAll();
    } else handleSearch(data);
  }, [filter]);

  async function handleAll() {
    if (loading) return;
    if (endedList) return;
    setLoading(true);

    const restaurantList = await loadAPI();
    if (!restaurantList) {
      setEndedList(true);
      setLoading(false);
      return;
    }
    if (restaurantList.length === 0) setEndedList(true);

    setData([...data, ...restaurantList]);
    setLoading(false);
    setFound(true);

    if (filter.length >= 2) {
      handleSearch([...data, ...restaurantList]);
      return;
    }
    setShownData([...data, ...restaurantList]);
  }

  async function loadAPI() {
    const restaurantes = await getRestaurants({page});
    //setPage(page + 1);
    setPage(page + 7);
    return restaurantes;
  }

  async function handleSearch(data: RestaurantsData[]) {
    if (filter.length < 2) {
      handleAll();
      return;
    }

    const newData = data?.filter((item: {nome: string}) => {
      const name = item.nome.toUpperCase();
      const text = filter.toUpperCase();
      return name.indexOf(text) > -1;
    });

    const sortedData = newData.sort((a: {nome: string}, b: {nome: string}) => {
      const scoreA = sorter(a.nome.toUpperCase(), filter.toUpperCase());
      const scoreB = sorter(b.nome.toUpperCase(), filter.toUpperCase());
      return scoreA - scoreB;
    });

    if (newData.length === 0) {
      setFound(false);
      setShownData([]);
    } else {
      setFound(true);
      setShownData(sortedData);
    }
  }

  function onEnd() {
    handleAll();
  }
  return (
    <View style={{flex: 1}}>
      <SearchBarContainer>
        <SearchIcon source={require('../../../../assets/images/search.png')} />
        <SearchInput
          placeholder={'Buscar Restaurantes'}
          placeholderTextColor={colors.gray}
          value={filter}
          onChangeText={setFilter}
        />
      </SearchBarContainer>
      <View style={{flex: 1}}>
        {data.length < 1 ||
          (!found && <ActivityIndicator size={50} color={colors.red} />)}
        <FlatList
          data={shownData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RestaurantCard data={item} />}
          numColumns={2}
          onEndReached={onEnd}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<FooterList load={loading} />}
          ListEmptyComponent={
            <ListEmptyComponent found={found} setFound={setFound} />
          }
        />
        <View style={{height: 60, width: '100%'}} />
      </View>
    </View>
  );
}
function FooterList({load}: any) {
  if (!load) return <View style={{height: 10}} />;

  return (
    <View style={{padding: 15}}>
      <ActivityIndicator size={25} color={colors.red} />
      <View style={{height: 50, width: '100%'}} />
    </View>
  );
}

function ListEmptyComponent({found, setFound}: any) {
  const [show, setShow] = useState(false);

  setTimeout(function () {
    if (!found) setShow(true);
    setFound(true);
  }, 3000);

  if (show) {
    return (
      <NoResultContainer>
        <NoResultImage
          source={require('../../../../assets/images/notFoundRestaurant.png')}
        />
        <NoResultText>Nenhum restaurante encontrado</NoResultText>
      </NoResultContainer>
    );
  } else return null;
}
