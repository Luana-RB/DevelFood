import React from 'react';
import {Animated, View} from 'react-native';
import {colors, screenWidth} from '../../../../../globalStyles';
import {styles} from './styles';

interface CarrosselMarkerProps {
  data: any;
  scrollX: any;
}

const CarrosselMarker: React.FC<CarrosselMarkerProps> = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
      {data?.map((_: any, i: any) => {
        const inputRange = [
          (i - 1) * screenWidth,
          i * screenWidth,
          (i + 0.6) * screenWidth,
        ];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [colors.gray, colors.red, colors.gray],
          extrapolate: 'clamp',
        });

        const size = scrollX.interpolate({
          inputRange,
          outputRange: [8, 12, 8],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, {backgroundColor, width: size, height: size}]}
          />
        );
      })}
    </View>
  );
};

export default CarrosselMarker;
