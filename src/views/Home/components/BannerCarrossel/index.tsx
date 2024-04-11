import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import Banners from './Banners';
import {SalesData} from '../../../../types/salesData';

interface BannerCarrosselProps {
  data: SalesData[];
}

const BannerCarrossel: React.FC<BannerCarrosselProps> = ({data}) => {
  const carrosselRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    carrosselRef.current?.scrollToIndex({index});

    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  function goToNext() {
    if (index < data.length - 1) setIndex(index + 1);
    else setIndex(0);
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <Banners data={item} index={index} />}
        ref={carrosselRef}
      />
    </View>
  );
};

export default BannerCarrossel;

// export const Carroussel = styled.View`
//   width: 100%;
//   height: ${screenHeight * 0.03}px;
//   margin-top: -8px;
// `;
