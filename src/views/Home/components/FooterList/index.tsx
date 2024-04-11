import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../../../globalStyles';

export default function FooterList(load: any, shownData: boolean) {
  if (!load || shownData) return <View style={{height: 10}} />;

  return (
    <View style={{padding: 15}}>
      <ActivityIndicator size={25} color={colors.red} />
      <View style={{height: 50, width: '100%'}} />
    </View>
  );
}
