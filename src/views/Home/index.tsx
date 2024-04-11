import React, {useEffect, useState} from 'react';
import {AuthContext} from '../../services/context/authContext';
import {useToken} from '../../services/context/tokenContext';
import {SafeAreaView, View} from 'react-native';
import {colors, screenHeight} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantList from './components/RestaurantList';
import AddressBanner from './components/AddressBanner';
import Banners from './components/Banners';
import CategoryList from '../../components/CategoryList';
import {FlatList} from 'react-native';
import {useCart} from '../../services/context/cartContext';
import CartBar from '../../components/CartBar';

const Home: React.FC = ({navigation}: any) => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});

  const [cart, setCart] = useState(false);
  const {numOfItems} = useCart();
  const {token} = useToken();

  useEffect(() => {
    if (numOfItems > 0) setCart(true);
    else setCart(false);
  }, [numOfItems]);

  const renderItem = ({item}: any) => {
    switch (item.type) {
      case 'addressBanner':
        return <AddressBanner />;
      case 'banners':
        return <Banners />;
      case 'categoryList':
        return <CategoryList />;
      case 'restaurantList':
        return <RestaurantList navigation={navigation} />;
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
        style={{flex: 1}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.type}
      />
      {cart && (
        <View
          style={{
            backgroundColor: colors.white,
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <CartBar margin={17} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
