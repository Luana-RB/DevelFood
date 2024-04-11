import React from 'react';
import {AuthContext} from '../../services/context/authContext';
import {useToken} from '../../services/context/tokenContext';
import {SafeAreaView, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantList from './components/RestaurantList';
import AddressBanner from './components/AddressBanner';
import Banners from './components/Banners';
import CategoryList from '../../components/CategoryList';
import {FlatList} from 'react-native';

const Home: React.FC = () => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  const {token} = useToken();

  const renderItem = ({item}: any) => {
    switch (item.type) {
      case 'addressBanner':
        return <AddressBanner />;
      case 'banners':
        return <Banners />;
      case 'categoryList':
        return <CategoryList />;
      case 'restaurantList':
        return <RestaurantList />;
      default:
        return null;
    }
  };

  const data = [
    {type: 'addressBanner'},
    {type: 'banners'},
    {type: 'categoryList'},
    {type: 'restaurantList'},
  ];

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.type}
      />
    </SafeAreaView>
  );
};

export default Home;
