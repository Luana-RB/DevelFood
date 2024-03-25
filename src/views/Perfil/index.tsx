import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';

const Perfil: React.FC = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <View>
        <Text>Perfil</Text>
      </View>
    </SafeAreaView>
  );
};

export default Perfil;
