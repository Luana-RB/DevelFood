import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, View} from 'react-native';
import SearchBar from '../../components/SearchBar';
import PlateCard from '../../components/PlateCard';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import {PlateData, RestaurantData} from '../../types/restaurantData';
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
import {useCart} from '../../services/context/cartContext';
import {getRestaurantById} from '../../services/api/restaurants';
import {RestaurantProfileScreenProps} from '../../types/routeTypes';
import ModalAvaliacao from '../../components/ModalAvaliacao';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';

const RestaurantProfile: React.FC<RestaurantProfileScreenProps> = ({
  route,
  navigation,
}) => {
  const [cart, setCart] = useState(false);
  const [data, setData] = useState<RestaurantData>();
  const [plateData, setPlateData] = useState<PlateData[]>([]);
  const [shownData, setShownData] = useState<PlateData[]>([]);
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );

  const {numOfItems} = useCart();
  const {restaurantId} = route.params;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      const newData = await getRestaurantById(restaurantId);
      if (newData) setData(newData);
      else {
        Alert.alert('Falha ao encontrar restaurante');
        navigation.goBack();
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      if (data.plates !== undefined && data.plates.length >= 1)
        setPlateData(data.plates);

      if (!!data.image) setImagePath({uri: data.image});
      else setImagePath(require('../../../assets/images/notFound.png'));

      if (numOfItems > 0) setCart(true);
      else setCart(false);
    }
  }, [numOfItems, data]);

  async function handleSearch(text: string) {
    if (text.length < 2) {
      setShownData(plateData);
      return;
    }

    const newData = plateData?.filter((item: {name: string}) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setShownData(newData);
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
        <FlatList
          style={{flex: 5}}
          data={shownData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PlateCard data={item} navigation={navigation} />
          )}
          ListFooterComponent={<View style={{height: 70}} />}
          ListEmptyComponent={
            <ListEmptyComponent
              text="Nenhum prato encontrado"
              imagePath="restaurant"
            />
          }
        />
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
      {isModalVisible && data && (
        <ModalAvaliacao
          setIsModalVisible={setIsModalVisible}
          restaurant={data}
          isModalVisible={isModalVisible}
        />
      )}
    </Container>
  );
};

export default RestaurantProfile;
