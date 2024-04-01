import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';

const Favoritos: React.FC = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <View></View>
    </SafeAreaView>
  );
};

export default Favoritos;
