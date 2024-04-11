import React, {useEffect, useState} from 'react';
import {AuthContext} from '../../services/context/authContext';
import {useToken} from '../../services/context/tokenContext';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors, screenHeight} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantList from './components/RestaurantList';
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

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />
      <RestaurantList navigation={navigation} />
      {cart && (
        <View style={styles.cartContainer}>
          <CartBar margin={-40} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: colors.white,
    height: screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
