import React, {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, View} from 'react-native';
import Banners from './Banners';
import CarrosselMarker from './CarrosselMarker';
import {getSales} from '../../../../services/api/sales';
import {SalesData} from '../../../../types/salesData';

interface BannerCarrosselProps {
  navigation: any;
}

const BannerCarrossel: React.FC<BannerCarrosselProps> = ({navigation}) => {
  const carrosselRef = useRef<FlatList>(null);
  const [carrosselIndex, setCarrosselIndex] = useState(0);
  const [data, setData] = useState<SalesData[]>([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      carrosselRef.current?.scrollToIndex({index: carrosselIndex});

      const interval = setInterval(() => {
        goToNext();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [carrosselIndex, data]);

  async function getData() {
    const newData = await getSales();
    if (newData) setData(newData);
  }

  function goToNext() {
    if (carrosselIndex < data.length - 1) setCarrosselIndex(carrosselIndex + 1);
    else setCarrosselIndex(0);
  }

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {useNativeDriver: false},
    )(event);
  };

  if (data.length === 0) {
    return <View />;
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Banners
            data={item}
            index={index}
            length={data.length}
            navigation={navigation}
          />
        )}
        ref={carrosselRef}
        onScroll={handleOnScroll}
      />
      <CarrosselMarker data={data} scrollX={scrollX} />
    </View>
  );
};

export default BannerCarrossel;
