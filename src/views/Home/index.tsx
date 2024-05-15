import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantList from './components/RestaurantList';
import {useCart} from '../../services/context/cartContext';
import CartBar from '../../components/CartBar';
import {getUserData} from '../../services/api/users';
import {useUser} from '../../services/context/userContext';
import {getAddressById} from '../../services/api/address';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from './styles';

const Home: React.FC = ({navigation}: any) => {
  const {storeData, storeAddress} = useUser();
  const [cart, setCart] = useState(false);
  const {numOfItems} = useCart();

  useFocusEffect(
    React.useCallback(() => {
      getUser();
    }, []),
  );

  useEffect(() => {
    if (numOfItems > 0) setCart(true);
    else setCart(false);
  }, [numOfItems]);

  async function getUser() {
    const fetchedUserData = await getUserData();
    storeData(fetchedUserData!);
    const fetchedUserAddress = await getAddressById();
    storeAddress(fetchedUserAddress);
  }
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />
      <RestaurantList navigation={navigation} />
      {cart && (
        <View style={styles.cartContainer}>
          <CartBar margin={-40} navigation={navigation} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
