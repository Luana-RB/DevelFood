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
  const [filteredData, setFilteredData] = useState<
    RestaurantsData[] | undefined
  >([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) return;
    setLoading(true);
    const restaurantes = await getRestaurants({page});
    if (!restaurantes) return;
    if (filter) await handleSearch(filter);

    const newData = restaurantes;
    setData([...data, ...newData]);
    setPage(page + 1);
    // setPage(page + 7);

    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }

  async function handleSearch(text: string) {
    setFilter(text);
    if (!text) setIsFiltered(false);

    setTimeout(function () {
      setLoading(false);
    }, 2000);

    const newData = data?.filter((item: {nome: string}) => {
      const itemData = item.nome.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setFilteredData(newData);
    setIsFiltered(true);
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />
      <SearchBar title="Buscar restaurantes" onChangeText={handleSearch} />
      <View style={{flex: 1}}>
        {data.length < 1 && <ActivityIndicator size={50} color={colors.red} />}
        <FlatList
          data={isFiltered ? filteredData : data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RestaurantCard data={item} />}
          numColumns={2}
          onEndReached={loadApi}
          onEndReachedThreshold={0.2}
          ListFooterComponent={<FooterList load={loading} />}
          ListEmptyComponent={
            <NoResultContainer>
              <NoResultImage
                source={require('../../../assets/images/notFoundRestaurant.png')}
              />
              <NoResultText>Nenhum restaurante encontrado</NoResultText>
            </NoResultContainer>
          }
        />
        <View style={{height: 60, width: '100%'}} />
      </View>
    </SafeAreaView>
  );
};

function FooterList({load}: any) {
  if (!load) return null;

  return (
    <View style={{padding: 15}}>
      <ActivityIndicator size={25} color={colors.red} />
    </View>
  );
}

export default Home;
