import React from 'react';
import {Banner, Container, Image} from './styles';
import {SalesData} from '../../../../../types/salesData';
import {sales} from '../../../../../mocks/sales';

interface BannerProps {
  data: SalesData;
  index: number;
  navigation: any;
}

const Banners: React.FC<BannerProps> = ({data, index, navigation}) => {
  const margin = index === sales.length - 1 ? 12 : 8;
  const image = {uri: data.imagem};

  return (
    <Container
      onPress={() =>
        navigation.navigate('RestaurantProfile', {
          restaurantId: data.restaurante.id,
        })
      }
      style={{marginRight: margin}}>
      <Banner>
        <Image source={image} resizeMode="cover" />
      </Banner>
    </Container>
  );
};

export default Banners;
