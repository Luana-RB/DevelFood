import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AddressContainer,
  AddressImage,
  AddressSubtitle,
  AddressTextContainer,
  AddressTitle,
  Container,
  EndOrderBar,
  EndOrderBarContainer,
  EndOrderText,
  ItemContainer,
  ItemTitle,
  Line,
  Price,
  RestaurantContainer,
  RestaurantImage,
  RestaurantSubtitle,
  RestaurantTextContainer,
  RestaurantTitle,
  Subtitle,
} from './styles';
import {useCart} from '../../services/context/cartContext';
import {useUser} from '../../services/context/userContext';
import {getRestaurantById} from '../../services/api/restaurants';
import PLateCardWithScroll from './components/PLateCardWithScroll';
import {useFocusEffect} from '@react-navigation/native';
import {postRequest} from '../../services/api/requests';
import {RequestData, RequestSendData} from '../../types/requestData';
import {getPlateData} from '../../services/api/plates';
import {PlateData} from '../../types/restaurantData';

const CartPage: React.FC = ({navigation}: any) => {
  const {items, price} = useCart();
  const {userData} = useUser();
  const [name, setName] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [category, setCategory] = useState('');
  const [platesData, setPlatesData] = useState<PlateData[]>();
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const [shownPrice, setShownPrice] = useState('0.00');

  useEffect(() => {
    const centsFormat = price.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setShownPrice(commaFormat);
  }, [price]);

  useFocusEffect(
    React.useCallback(() => {
      callRestaurantData();
      callPlatesData();
    }, []),
  );

  async function callPlatesData() {
    const platePromises = items.map(async item => await getPlateData(item.id));
    try {
      const plateArray = await Promise.all(platePromises);
      if (plateArray) setPlatesData(plateArray.filter(Boolean) as PlateData[]);
      else {
        Alert.alert('Falha carregar dados do pedido');
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert('Falha carregar dados do pedido');
      navigation.goBack();
    }
  }

  async function callRestaurantData() {
    const restaurantData = await getRestaurantById(items[0].restaurantId);
    if (restaurantData) {
      setName(restaurantData.name);
      setRestaurantId(restaurantData.id);
      if (restaurantData.foodType?.name)
        setCategory(restaurantData.foodType?.name);
      if (restaurantData.image) setImagePath({uri: restaurantData.image});
      else setImagePath(require('../../../assets/images/notFound.png'));
    } else {
      Alert.alert('Falha carregar dados do pedido');
      navigation.goBack();
    }
  }

  async function handleSubmit() {
    const request: RequestSendData = {
      restaurantId,
      plates: items,
      paymentType: 'dinheiro',
      date: String(new Date()), //formatar data
    };
    const requestId = await postRequest(request);
    navigation.navigate('CheckoutRequest', requestId);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusAwareStatusBar
        backgroundColor={colors.red}
        barStyle="light-content"
      />
      <Container>
        <AddressContainer>
          <AddressImage
            source={require('../../../assets/images/address.png')}
          />
          <AddressTextContainer>
            <Subtitle>Entregar em:</Subtitle>
            <AddressTitle>
              Rua {userData?.address[0].street} {userData?.address[0].number}
            </AddressTitle>
            <AddressSubtitle>
              {userData?.address[0].neighbourhood}
            </AddressSubtitle>
          </AddressTextContainer>
          <Icon name="chevron-right" size={25} color={colors.gray} />
        </AddressContainer>
        <Line />
        <RestaurantContainer>
          <RestaurantTextContainer>
            <RestaurantTitle>{name}</RestaurantTitle>
            <RestaurantSubtitle>{category}</RestaurantSubtitle>
          </RestaurantTextContainer>
          <RestaurantImage source={imagePath} />
        </RestaurantContainer>
        <ItemContainer>
          <ItemTitle>Meus Itens</ItemTitle>
          <FlatList
            style={{flex: 1}}
            data={platesData}
            keyExtractor={item => item.id}
            renderItem={({item}) => <PLateCardWithScroll item={item} />}
            ListFooterComponent={<View style={{height: 200}} />}
          />
        </ItemContainer>
      </Container>
      <EndOrderBarContainer>
        <EndOrderBar>
          <Icon name="currency-usd" size={25} color={colors.white} />
          <TouchableOpacity onPress={handleSubmit}>
            <EndOrderText>Finalizar pedido</EndOrderText>
          </TouchableOpacity>
          <Price>R$ {shownPrice}</Price>
        </EndOrderBar>
      </EndOrderBarContainer>
    </SafeAreaView>
  );
};

export default CartPage;
