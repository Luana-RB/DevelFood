import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globalStyles';

export function CustomArrowButton({navigation}: any) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name={'arrow-left'}
        color={colors.black}
        size={25}
        style={{marginHorizontal: 20}}
      />
    </TouchableOpacity>
  );
}
