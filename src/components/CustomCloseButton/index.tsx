import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../globalStyles';

export function CustomCloseButton({handleSubmit}: any) {
  return (
    <TouchableOpacity onPress={handleSubmit}>
      <Icon
        name="close"
        color={colors.white}
        size={30}
        style={{marginHorizontal: 20}}
      />
    </TouchableOpacity>
  );
}
