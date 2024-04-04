import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {AuthContext} from '../../services/context/authContext';
import {useToken} from '../../services/context/tokenContext';
import {SafeAreaView} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantCard from '../../components/RestaurantCard';
import {RestaurantsData} from '../../types/restaurantData';
import SearchBar from '../../components/SearchBar';
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from '../../components/NoResultCard';
import {getRestaurants} from '../../services/api/restaurantes';

const Home: React.FC = () => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  const {token} = useToken();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RestaurantsData[]>([]);
  const [shownData, setShownData] = useState<RestaurantsData[]>([]);
  const [found, setFound] = useState(false);
  const [endedList, setEndedList] = useState(false);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) return;
    if (endedList) return;
    setLoading(true);

    const restaurantes = await getRestaurants({page});

    if (!restaurantes) {
      setEndedList(true);
      setLoading(false);
      return;
    }

    if (restaurantes.length === 0) setEndedList(true);

    setData([...data, ...restaurantes]);
    setLoading(false);
    setFound(true);

    setPage(page + 1);
    //setPage(page + 7);

    if (filter) {
      await handleSearch();
    } else {
      setShownData([...data, ...restaurantes]);
    }
  }

  async function handleSearch(text?: string) {
    const filterText = text ? text : filter;
    if (text) setFilter(text);
    if (filterText.length < 2) {
      setShownData(data);
      return;
    }

    const newData = data?.filter((item: {nome: string}) => {
      const itemData = item.nome.toUpperCase();
      const textData = filterText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    if (newData.length === 0) {
      setFound(false);
      setShownData([]);
    } else {
      setFound(true);
      setShownData(newData);
    }
  }

  function onEnd() {
    loadApi();
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />
      <SearchBar title="Buscar restaurantes" onChangeText={handleSearch} />
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
    </SafeAreaView>
  );
};

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
          source={require('../../../assets/images/notFoundRestaurant.png')}
        />
        <NoResultText>Nenhum restaurante encontrado</NoResultText>
      </NoResultContainer>
    );
  } else return null;
}

export default Home;
