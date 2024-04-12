import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../../globalStyles';
import {styles} from './styles';

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
