import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, screenHeight, screenWidth} from '../../../../../globalStyles';

interface CarrosselMarkerProps {
  show: boolean;
}

const CarrosselMarker: React.FC<CarrosselMarkerProps> = ({show}) => {
  const [color, setColor] = useState(colors.gray);
  const [size, setSize] = useState(8);

  useEffect(() => {
    if (show) {
      setColor(colors.red);
      setSize(10);
    } else {
      setColor(colors.gray);
      setSize(8);
    }
  }, [show]);

  return (
    <View style={styles.container}>
      <Icon name="circle" size={size} color={color} />
    </View>
  );
};

export default CarrosselMarker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: screenWidth * 0.04,
  },
});
