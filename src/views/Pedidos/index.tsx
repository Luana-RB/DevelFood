import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';

const Pedidos: React.FC = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />
      <View>
        <Text>Pedidos</Text>
      </View>
    </SafeAreaView>
  );
};

export default Pedidos;
