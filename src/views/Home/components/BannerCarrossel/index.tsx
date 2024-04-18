import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import Banners from './Banners';
import {SalesData} from '../../../../types/salesData';
import CarrosselMarker from './CarrosselMarker';

interface BannerCarrosselProps {
  data: SalesData[];
  navigation: any;
}

const BannerCarrossel: React.FC<BannerCarrosselProps> = ({
  data,
  navigation,
}) => {
  const carrosselRef = useRef<FlatList>(null);
  const [carrosselIndex, setCarrosselIndex] = useState(0);

  useEffect(() => {
    carrosselRef.current?.scrollToIndex({index: carrosselIndex});

    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [carrosselIndex]);

  function goToNext() {
    if (carrosselIndex < data.length - 1) setCarrosselIndex(carrosselIndex + 1);
    else setCarrosselIndex(0);
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Banners data={item} index={index} navigation={navigation} />
        )}
        ref={carrosselRef}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <CarrosselMarker show={index === carrosselIndex} />
        )}
      />
    </View>
  );
};

export default BannerCarrossel;
