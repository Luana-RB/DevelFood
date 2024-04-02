import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {
  BodyContainer,
  Container,
  HeaderCategory,
  HeaderContainer,
  HeaderLogo,
  HeaderTextContainer,
  HeaderTitle,
  Line,
  PlatesTitle,
} from './styles';
import SearchBar from '../../components/SearchBar';
import PlateCard from '../../components/PlateCard';
import CartBar from '../../components/CartBar';
import {useRestaurant} from '../../services/context/restaurantContext';
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from '../../components/NoResultCard';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';

const RestaurantProfile: React.FC = () => {
  const [cart, setCart] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );

  const {data} = useRestaurant();
  useEffect(() => {
    if (data?.pratos === undefined) {
      setNotFound(true);
    }
    if (data) {
      if (!!data.fotos) {
        setImagePath({uri: data.fotos});
      } else {
        setImagePath(require('../../../assets/images/notFound.png'));
      }
    }
  }, []);
  if (!data) return;

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <HeaderContainer>
        <HeaderTextContainer>
          <HeaderTitle>{data.nome}</HeaderTitle>
          <HeaderCategory>{data.categoria}</HeaderCategory>
        </HeaderTextContainer>
        <HeaderLogo source={imagePath} />
      </HeaderContainer>
      <Line />
      <BodyContainer>
        <PlatesTitle>Pratos</PlatesTitle>
        <SearchBar
          title={`Buscar em ${data.nome}`}
          onChangeText={function (text: string): void {}}
        />
        {notFound && (
          <NoResultContainer>
            <NoResultImage
              source={require('../../../assets/images/notFoundRestaurant.png')}
            />
            <NoResultText>Nenhum prato encontrado</NoResultText>
          </NoResultContainer>
        )}
        <FlatList
          data={data.pratos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PlateCard data={item} />}
          ListFooterComponent={<View style={{height: 70}} />}
        />
      </BodyContainer>
      {cart && <CartBar />}
    </Container>
  );
};

export default RestaurantProfile;
