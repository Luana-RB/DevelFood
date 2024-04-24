import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {colors} from '../../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlateCard from '../../components/PlateCard';
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

const CartPage: React.FC = () => {
  const {items, price} = useCart();
  const {userData} = useUser();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const [shownPrice, setShownPrice] = useState('0.00');

  useEffect(() => {
    const centsFormat = price.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    setShownPrice(commaFormat);
  }, [price]);

  useEffect(() => {
    async function callData() {
      const restaurantData = await getRestaurantById(items[0].restaurantId);
      if (restaurantData) {
        setName(restaurantData.nome);
        if (restaurantData.categoria) setCategory(restaurantData.categoria);
        if (restaurantData.fotos) setImagePath({uri: restaurantData.fotos});
        else setImagePath(require('../../../assets/images/notFound.png'));
      }
    }
    callData();
  }, []);

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
              Rua {userData?.address.rua} {userData?.address.num}
            </AddressTitle>
            <AddressSubtitle>{userData?.address.bairro}</AddressSubtitle>
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
            renderItem={({item}) => <PlateCard data={item} small={true} />}
            ListFooterComponent={<View style={{height: 200}} />}
          />
        </ItemContainer>
      </Container>
      <EndOrderBarContainer>
        <EndOrderBar>
          <Icon name="currency-usd" size={25} color={colors.white} />
          <TouchableOpacity>
            <EndOrderText>Finalizar pedido</EndOrderText>
          </TouchableOpacity>
          <Price>R$ {shownPrice}</Price>
        </EndOrderBar>
      </EndOrderBarContainer>
    </SafeAreaView>
  );
};

export default CartPage;
