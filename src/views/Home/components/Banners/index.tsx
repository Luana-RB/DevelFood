import React from 'react';
import {Banner, Carroussel, Container, Image} from './styles';

// import { Container } from './styles';

const Banners: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Image
          source={require('../../../../../assets/images/exemple.png')}
          resizeMode="cover"
        />
      </Banner>
      <Carroussel />
    </Container>
  );
};

export default Banners;
