import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import PlateCard from '../../components/PlateCard';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import {RestaurantPlate} from '../../types/restaurantData';
import CartBar from '../../components/CartBar';
import {useRestaurant} from '../../services/context/restaurantContext';
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
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from '../../components/NoResultComponent';
import {useCart} from '../../services/context/cartContext';

const RestaurantProfile: React.FC = ({navigation}: any) => {
  const [cart, setCart] = useState(false);
  const [notFound, setNotFound] = useState(true);
  const [loading, setLoading] = useState(false);
  const [plateData, setPlateData] = useState<RestaurantPlate[]>([]);
  const [filteredData, setFilteredData] = useState<RestaurantPlate[] | null>();
  const [isFiltered, setIsFiltered] = useState(false);
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const {numOfItems} = useCart();
  const {data} = useRestaurant();
  if (!data) return;

  useEffect(() => {
    if (data?.pratos !== undefined && data?.pratos?.length >= 1) {
      setNotFound(false);
      setPlateData(data?.pratos);
    }
    if (!!data.fotos) setImagePath({uri: data.fotos});
    else setImagePath(require('../../../assets/images/notFound.png'));

    if (numOfItems > 0) setCart(true);
    else setCart(false);
  }, [numOfItems]);

  async function handleSearch(text: string) {
    if (!text) setIsFiltered(false);
    setLoading(true);

    setTimeout(function () {
      setLoading(false);
    }, 2000);

    const newData = plateData?.filter((item: {nome: string}) => {
      const itemData = item.nome.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    if (!newData || newData.length === 0) {
      setNotFound(true);
      setLoading(false);
    } else setNotFound(false);

    setFilteredData(newData);
    setIsFiltered(true);
  }

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
          onChangeText={handleSearch}
        />

        {notFound && (
          <NoResultContainer style={{marginTop: 60}}>
            <NoResultImage
              source={require('../../../assets/images/notFoundRestaurant.png')}
            />
            <NoResultText>Nenhum prato encontrado</NoResultText>
          </NoResultContainer>
        )}

        <FlatList
          data={isFiltered ? filteredData : data.pratos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PlateDetails', {
                  plate: item,
                  restaurant: data,
                });
              }}>
              <PlateCard data={item} />
            </TouchableOpacity>
          )}
          ListFooterComponent={<View style={{height: 70}} />}
          style={{flex: 5}}
        />
        {loading && <ActivityIndicator size={50} color={colors.red} />}
      </BodyContainer>
      {cart && (
        <View
          style={{
            backgroundColor: colors.white,
            flex: 1.7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CartBar />
        </View>
      )}
    </Container>
  );
};

export default RestaurantProfile;
