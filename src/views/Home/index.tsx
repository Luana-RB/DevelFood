import React, {useEffect, useState} from 'react';
import {AuthContext} from '../../services/context/authContext';
import {useToken} from '../../services/context/tokenContext';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors, screenHeight} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantList from './components/RestaurantList';
import {useCart} from '../../services/context/cartContext';
import CartBar from '../../components/CartBar';
import ModalAvaliacao from '../../components/ModalAvaliacao';
import {restaurantsMock} from '../../mocks/restaurants';

const Home: React.FC = ({navigation}: any) => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});

  const {token} = useToken();
  const [cart, setCart] = useState(false);
  const {numOfItems} = useCart();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  useEffect(() => {
    if (numOfItems > 0) setCart(true);
    else setCart(false);
  }, [numOfItems]);

  return (
    <SafeAreaView style={styles.container}>
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
      {isModalVisible && (
        <ModalAvaliacao
          setIsModalVisible={setIsModalVisible}
          restaurant={restaurantsMock[0]}
          isModalVisible={isModalVisible}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  cartContainer: {
    backgroundColor: colors.white,
    height: screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
