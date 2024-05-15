import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AddressContainer,
  AddressImage,
  AddressSubtitle,
  AddressTextContainer,
  AddressTitle,
  Container,
  DateContainer,
  DateDay,
  DateMonth,
  FullPriceContainer,
  FullPriceText,
  FullPriceTitle,
  ItemContainer,
  Line,
  RestaurantContainer,
  RestaurantImage,
  RestaurantTextContainer,
  RestaurantTitle,
  StatusBox,
  StatusContainer,
  StatusText,
  Subtitle,
} from './styles';
import PlateCard from '../../components/PlateCard';
import {RequestDetailScreenProps} from '../../types/routeTypes';
import {getRequestById} from '../../services/api/requests';
import {getAddressById} from '../../services/api/address';
import {Restaurant} from '../../types/restaurantData';
import {getRestaurantById} from '../../services/api/restaurants';
import {UserAddress} from '../../types/userData';
import {monthText, statusIcon, statusText} from '../../types/enums';
import {useFocusEffect} from '@react-navigation/native';
import {useModal} from '../../services/context/modalContext';
import ModalController from '../../components/ModalAvaliacao/controller';
const DELAY = 10000;

const RequestDetail: React.FC<RequestDetailScreenProps> = ({route}) => {
  const [plates, setPlates] = useState<any[]>();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [restaurantId, setThisRestaurantId] = useState('');
  const [address, setAddress] = useState<UserAddress>();
  const [day, setDay] = useState<String>('');
  const [month, setMonth] = useState<String>('');
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<string>('');
  const [fullPrice, setFullPrice] = useState<string>('0,00');
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const {requestId} = route.params;
  const [fetch, setFetch] = useState(true);
  const {setRequestId, setRestaurantId, setRestaurantName} = useModal();

  useFocusEffect(
    React.useCallback(() => {
      if (fetch) loadData();
      setInterval(() => {
        if (status === 'PEDIDO_FINALIZADO') return;
        setFetch(true);
      }, DELAY);
    }, [fetch]),
  );

  useEffect(() => {
    checkLoading();
    if (status === 'PEDIDO_FINALIZADO') handleFinished();
  }, [status]);

  function checkLoading() {
    if (status.length > 0) setLoading(false);
  }
  async function loadData() {
    const requestData = await getRequestById(requestId);
    if (requestData) {
      const data = {...requestData};
      setThisRestaurantId(data.restaurant.id);

      const addressData = await getAddressById();
      const restaurantData = await getRestaurantById(data.restaurant.id);
      if (addressData && addressData[0] !== address) setAddress(addressData[0]);
      if (restaurantData && restaurantData !== restaurant) {
        if (restaurantData.image) setImagePath({uri: restaurantData.image});
        else setImagePath(require('../../../assets/images/notFound.png'));
        setRestaurant(restaurantData);
      }
      formatDay(data.date);
      formatMonth(data.date);
      if (data.status && data.status !== status) setStatus(data.status);
      if (data.fullPrice) formatFullPrice(data.fullPrice);
      const plateArray = data.plates;
      setPlates(plateArray);
    }
    setFetch(false);
  }

  function formatDay(dateData: string) {
    const dayData = dateData.substring(8, 10);
    if (dayData && dayData[0] !== day) setDay(dayData[0] + dayData[1]);
  }

  function formatMonth(dateData: string) {
    if (dateData) {
      const monthAbreviation = dateData.substring(5, 7);
      const monthName = monthText[monthAbreviation];
      const monthUpperCase =
        monthName.substring(0, 1).toUpperCase() + monthName.substring(1);
      if (monthUpperCase && monthUpperCase !== month) setMonth(monthUpperCase);
    }
  }

  function formatFullPrice(fullPriceData: number) {
    const centsFormat = fullPriceData.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    if (commaFormat !== fullPrice) setFullPrice(commaFormat);
  }

  function handleFinished() {
    if (restaurant) {
      setRestaurantId(restaurantId);
      setRestaurantName(restaurant.name);
      setRequestId(requestId);
    }
    ModalController.showModal();
  }

  if (loading)
    return (
      <ActivityIndicator size={50} color={colors.red} style={{margin: 20}} />
    );

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
              Rua {address?.street} {address?.number}, {address?.neighbourhood}
            </AddressTitle>
            <AddressSubtitle>{address?.neighbourhood}</AddressSubtitle>
          </AddressTextContainer>
          <DateContainer>
            <DateDay>{day}</DateDay>
            <DateMonth>{month}</DateMonth>
          </DateContainer>
        </AddressContainer>
        <RestaurantContainer>
          <RestaurantImage source={imagePath} />
          <RestaurantTextContainer>
            <Subtitle>Restaurante:</Subtitle>
            <RestaurantTitle>{restaurant?.name}</RestaurantTitle>
          </RestaurantTextContainer>
          <StatusContainer>
            <StatusBox>
              <Icon name={statusIcon[status]} size={35} color={colors.black} />
            </StatusBox>
            <StatusText>{statusText[status]}</StatusText>
          </StatusContainer>
        </RestaurantContainer>
        <Line />
        <ItemContainer>
          <FullPriceContainer>
            <FullPriceTitle>Total pago</FullPriceTitle>
            <View style={{flexDirection: 'row'}}>
              <FullPriceText>R$ </FullPriceText>
              <FullPriceText style={{fontWeight: 'bold'}}>
                {fullPrice}
              </FullPriceText>
            </View>
          </FullPriceContainer>
          <FlatList
            style={{flex: 1}}
            data={plates}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PlateCard
                restaurantId={restaurantId}
                small={true}
                data={item}
                finished={true}
                number={item.quantity ?? 1}
              />
            )}
            ListFooterComponent={<View style={{height: 200}} />}
          />
        </ItemContainer>
      </Container>
    </SafeAreaView>
  );
};

export default RequestDetail;
