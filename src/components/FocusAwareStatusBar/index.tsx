import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {StatusBarProps} from 'react-native';

export function FocusAwareStatusBar(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<StatusBar> &
    Readonly<StatusBarProps>,
) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
