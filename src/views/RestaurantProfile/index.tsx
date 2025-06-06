import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import PlateCard from '../../components/PlateCard';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import {PlateData, Restaurant} from '../../types/restaurantData';
import CartBar from '../../components/CartBar';
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
} from '../../components/ListEmptyComponent/styles';
import {useCart} from '../../services/context/cartContext';
import {getRestaurantById} from '../../services/api/restaurants';
import {RestaurantProfileScreenProps} from '../../types/routeTypes';

const RestaurantProfile: React.FC<RestaurantProfileScreenProps> = ({
  route,
  navigation,
}) => {
  const [cart, setCart] = useState(false);
  const [data, setData] = useState<Restaurant>();
  const [notFound, setNotFound] = useState(true);
  const [loading, setLoading] = useState(false);
  const [plateData, setPlateData] = useState<PlateData[]>([]);
  const [filteredData, setFilteredData] = useState<PlateData[] | null>();
  const [isFiltered, setIsFiltered] = useState(false);
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const {numOfItems} = useCart();
  const {restaurantId} = route.params;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const newData = await getRestaurantById(restaurantId);
    if (newData) setData(newData);
    else {
      Alert.alert('Falha ao encontrar restaurante');
      navigation.goBack();
    }
  }

  useEffect(() => {
    if (data) {
      if (data.plates !== undefined && data.plates.length >= 1) {
        setNotFound(false);
        setPlateData(data.plates);
      }
      if (!!data.image) setImagePath({uri: data.image});
      else setImagePath(require('../../../assets/images/notFound.png'));

      if (numOfItems > 0) setCart(true);
      else setCart(false);
    }
  }, [numOfItems, data]);

  async function handleSearch(text: string) {
    if (!text) setIsFiltered(false);
    setLoading(true);

    setTimeout(function () {
      setLoading(false);
    }, 2000);

    const newData = plateData?.filter((item: {name: string}) => {
      const itemData = item.name.toUpperCase();
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

  if (!data)
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <ActivityIndicator size={60} color={colors.red} style={{margin: 50}} />
      </View>
    );

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <HeaderContainer>
        <HeaderTextContainer>
          <HeaderTitle>{data?.name}</HeaderTitle>
          <HeaderCategory>{data?.foodType?.name}</HeaderCategory>
        </HeaderTextContainer>
        <HeaderLogo source={imagePath} />
      </HeaderContainer>
      <Line />
      <BodyContainer>
        <PlatesTitle>Pratos</PlatesTitle>
        <SearchBar
          title={`Buscar em ${data?.name}`}
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
          data={isFiltered ? filteredData : data?.plates}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PlateDetails', {
                  plate: item,
                  restaurantId: restaurantId,
                });
              }}>
              <PlateCard data={item} restaurantId={restaurantId} />
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
            justifyContent: 'flex-start',
          }}>
          <CartBar margin={20} navigation={navigation} />
        </View>
      )}
    </Container>
  );
};

export default RestaurantProfile;
