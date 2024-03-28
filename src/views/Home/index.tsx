import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {AuthContext} from '../../services/authContext';
import {useToken} from '../../services/tokenContext';
import {SafeAreaView} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantCard from '../../components/RestaurantCard';
import {RestaurantsData} from '../../types/restaurantData';
import {restaurants} from '../../mocks/restaurants';
import SearchBar from '../../components/SearchBar';
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from '../../components/NoResultCard';
import {getRestaurants} from '../../services/requisitions/restaurantes';

const Home: React.FC = () => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  const {token} = useToken();

  const [loading, setLoading] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(8);
  const [data, setData] = useState<RestaurantsData[]>([]);
  const [filteredData, setFilteredData] = useState<RestaurantsData[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState('');
  const [notFound, setNotFound] = useState(false);
  const perPage = 8;

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    const restaurantes = await getRestaurants();
    console.log(restaurantes);
    if (loading) return;
    if (filter) await handleSearch(filter);

    const newData = restaurantes;
    setData([...data, ...newData]);

    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }

  async function handleSearch(text: string) {
    const restaurantes = await getRestaurants();
    setFilter(text);
    if (!text) setIsFiltered(false);

    setTimeout(function () {
      setLoading(false);
    }, 2000);

    const db = restaurantes.slice(0, maxValue);

    const newData = db?.filter((item: {info: {name: string}}) => {
      const itemData = item.info.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    if (newData.length === 0) {
      setNotFound(true);
      setLoading(false);
    } else setNotFound(false);

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
      {notFound && (
        <NoResultContainer>
          <NoResultImage
            source={require('../../../assets/images/notFoundRestaurant.png')}
          />
          <NoResultText>Nenhum restaurante encontrado</NoResultText>
        </NoResultContainer>
      )}
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
        />
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
