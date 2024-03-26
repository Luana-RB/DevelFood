import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {AuthContext} from '../../services/authContext';
import {useToken} from '../../services/tokenContext';
import {SafeAreaView} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantCard from '../../components/RestaurantCard';
import {RestaurantsData} from '../../types/restaurantData';
import {restaurants} from '../../mocks/restaurants';

const Home: React.FC = () => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  const {token} = useToken();

  const [loading, setLoading] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(8);
  const [data, setData] = useState<RestaurantsData[]>([]);
  const perPage = 8;

  useEffect(() => {
    loadApi();
  }, []);

  function loadApi() {
    if (loading) return;
    setLoading(true);
    const newData = restaurants.slice(minValue, maxValue);
    setData([...data, ...newData]);
    setMinValue(minValue + perPage);
    setMaxValue(maxValue + perPage);
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />

      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={item => item.credentials.id}
          renderItem={({item}) => <RestaurantCard data={item} />}
          numColumns={2}
          onEndReached={loadApi}
          onEndReachedThreshold={0.5}
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
