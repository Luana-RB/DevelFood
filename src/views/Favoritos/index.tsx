import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import RestaurantCard from '../../components/RestaurantCard';

const Favoritos: React.FC = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <View>
        <RestaurantCard />
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;
