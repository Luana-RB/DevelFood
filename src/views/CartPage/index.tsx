import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';

const CartPage: React.FC = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        backgroundColor={colors.red}
        barStyle="light-content"
      />
      <View />
    </SafeAreaView>
  );
};

export default CartPage;
