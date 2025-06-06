import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors, screenHeight} from '../../globalStyles';
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
import {RequestPlatesData, RequestSendData} from '../../types/requestData';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';

const CartPage: React.FC = ({navigation}: any) => {
  const {items, price, restaurantId} = useCart();

  const {userAddress} = useUser();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const [shownPrice, setShownPrice] = useState('0.00');
  const [listEmpty, setListEmpty] = useState(false);

  useEffect(() => {
    const centsFormat = price.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setShownPrice(commaFormat);
    if (items.length < 1) setListEmpty(true);
    else setListEmpty(false);
  }, [price]);

  useFocusEffect(
    React.useCallback(() => {
      if (!listEmpty) callRestaurantData();
    }, []),
  );

  async function callRestaurantData() {
    const restaurantData = await getRestaurantById(restaurantId);
    if (restaurantData) {
      setName(restaurantData.name);
      setCategory(restaurantData.foodType?.name);
      if (restaurantData.image) setImagePath({uri: restaurantData.image});
      else setImagePath(require('../../../assets/images/notFound.png'));
    } else {
      Alert.alert('Falha carregar dados do pedido');
      navigation.goBack();
    }
  }

  function formatPlateData() {
    const plateArray: RequestPlatesData[] = items.map(item => {
      const formattedItem: RequestPlatesData = {
        id: item.id,
        quantity: item.quantity || 0,
        observation: 'observação',
      };
      return formattedItem;
    });
    return plateArray;
  }

  async function handleSubmit() {
    setLoading(true);
    const request = handleRequest();
    const requestId = await postRequest(request);
    if (requestId) {
      setLoading(false);
      handleNavigation(requestId);
    } else {
      Alert.alert('Pedido não pode ser realizado');
    }
  }

  function handleRequest() {
    const platesToSend = formatPlateData();
    const address = userAddress?.id;
    const request: RequestSendData = {
      restaurantId: restaurantId,
      plates: platesToSend,
      paymentType: 'DINHEIRO',
      addressId: address ?? '1',
    };
    return request;
  }

  function handleNavigation(requestId: string) {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'Home'},
        {
          name: 'CheckoutRequest',
          params: {
            requestId,
          },
        },
      ],
    });
  }

  if (listEmpty) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FocusAwareStatusBar
          backgroundColor={colors.red}
          barStyle="light-content"
        />
        <Container style={{paddingTop: screenHeight * 0.2}}>
          <ListEmptyComponent
            text="Seu Carrinho está vazio"
            imagePath="carrinho"
            load={true}
          />
        </Container>
      </SafeAreaView>
    );
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
              Rua {userAddress?.street} {userAddress?.number}
            </AddressTitle>
            <AddressSubtitle>{userAddress?.neighbourhood}</AddressSubtitle>
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
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <PLateCardWithScroll item={item} />}
            ListFooterComponent={<View style={{height: 200}} />}
          />
        </ItemContainer>
      </Container>
      <EndOrderBarContainer>
        <EndOrderBar>
          <Icon name="currency-usd" size={25} color={colors.white} />
          {loading ? (
            <ActivityIndicator size={20} color={colors.white} />
          ) : (
            <TouchableOpacity onPress={handleSubmit}>
              <EndOrderText>Finalizar pedido</EndOrderText>
            </TouchableOpacity>
          )}
          <Price>R$ {shownPrice}</Price>
        </EndOrderBar>
      </EndOrderBarContainer>
    </SafeAreaView>
  );
};

export default CartPage;
