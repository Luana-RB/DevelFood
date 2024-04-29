import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
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
import {PlateData, RestaurantData} from '../../types/restaurantData';
import {getRestaurantById} from '../../services/api/restaurants';
import {UserAddress} from '../../types/userData';
import {statusIcon, statusText} from '../../types/enums';
import {useFocusEffect} from '@react-navigation/native';
const DELAY = 2000;

const RequestDetail: React.FC<RequestDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const [plates, setPlates] = useState<PlateData[]>();
  const [restaurant, setRestaurant] = useState<RestaurantData>();
  const [address, setAddress] = useState<UserAddress>();
  const [day, setDay] = useState<String>('');
  const [month, setMonth] = useState<String>('');
  const [status, setStatus] = useState<string>('');
  const [fullPrice, setFullPrice] = useState<string>('0,00');
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const {requestId} = route.params;

  useFocusEffect(
    React.useCallback(() => {
      loadData();
      setInterval(() => {
        loadData();
      }, DELAY);
    }, []),
  );

  async function loadData() {
    const requestData = await getRequestById(requestId);
    if (requestData) {
      const data = {...requestData};

      const addressData = await getAddressById(data.addressId);
      const restaurantData = await getRestaurantById(data.restaurantId);
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
      setPlates(data.plates);
    }
  }

  function formatDay(dateData: string) {
    const dayData = dateData.match(/\d{2}/);
    if (dayData && dayData[0] !== day) setDay(dayData[0]);
  }
  function formatMonth(dateData: string) {
    const monthAbreviation = dateData.substring(7, 10);
    const monthUpperCase =
      monthAbreviation.substring(0, 1).toUpperCase() +
      monthAbreviation.substring(1);
    if (monthUpperCase && monthUpperCase !== month) setMonth(monthUpperCase);
  }
  function formatFullPrice(fullPriceData: number) {
    const centsFormat = fullPriceData.toFixed(2);
    const commaFormat = centsFormat.replace(/\./g, ',');
    if (commaFormat !== fullPrice) setFullPrice(commaFormat);
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
              Rua {address?.street} {address?.number}
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
                small={true}
                data={item}
                finished={true}
                number={1}
                navigation={navigation}
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
