import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DeleteContainer, DeleteText} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlateCard from '../../../../components/PlateCard';
import {colors} from '../../../../globalStyles';
import {PlateData} from '../../../../types/restaurantData';
import {useCart} from '../../../../services/context/cartContext';
interface PlateCardWithSCrollProps {
  item: PlateData;
}

const PLateCardWithScroll: React.FC<PlateCardWithSCrollProps> = ({item}) => {
  const {getQuantity, removeItem} = useCart();
  const [quantity, setQuantity] = useState(0);
  const MAX_RIGHT = 130;
  const onRight = useSharedValue(true);
  const position = useSharedValue(0);

  useEffect(() => {
    const fetchedQuantity = getQuantity(item);
    if (fetchedQuantity) setQuantity(fetchedQuantity);
  });

  function handleDelete() {
    removeItem(item, quantity);
  }

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      if (position.value <= 0 && e.translationX < 0) return;
      if (position.value >= MAX_RIGHT && e.translationX >= 0) return;
      if (e.translationX > 0 || position.value !== 0) {
        if (onRight.value) position.value = e.translationX;
        else position.value = MAX_RIGHT + e.translationX;
      } else return;
    })
    .onEnd(e => {
      if (position.value > MAX_RIGHT / 2) {
        position.value = withTiming(MAX_RIGHT, {duration: 100});
        onRight.value = false;
      } else {
        position.value = withTiming(0, {duration: 100});
        onRight.value = true;
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
  }));

  return (
    <View>
      <DeleteContainer onPress={handleDelete}>
        <Icon name="trash-can-outline" size={30} color={colors.white} />
        <DeleteText>Remover</DeleteText>
      </DeleteContainer>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyle]}>
          <PlateCard data={item} small={true} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default PLateCardWithScroll;
