import React from 'react';
import {Banner, Container, Image} from './styles';
import {SalesData} from '../../../../../types/salesData';
import {sales} from '../../../../../mocks/sales';

interface BannerProps {
  data: SalesData;
  index: number;
}

const Banners: React.FC<BannerProps> = ({data, index}) => {
  const margin = index === sales.length - 1 ? 12 : 8;

  return (
    <Container
      onPress={() => console.log(data.restaurantId)}
      style={{marginRight: margin}}>
      <Banner>
        <Image source={data.imagePath} resizeMode="cover" />
      </Banner>
    </Container>
  );
};

export default Banners;
