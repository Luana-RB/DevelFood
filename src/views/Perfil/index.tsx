import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {AuthContext} from '../../services/context/authContext';

const Perfil: React.FC = () => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  return (
    <SafeAreaView>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <TouchableOpacity onPress={signOut}>
        <Text style={{color: colors.black}}>Perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Perfil;
