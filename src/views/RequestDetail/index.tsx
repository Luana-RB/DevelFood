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
import {useUser} from '../../services/context/userContext';
import PlateCard from '../../components/PlateCard';
import {restaurantsMock} from '../../mocks/restaurants';

const RequestDetail: React.FC = () => {
  const {userData} = useUser();
  const [plateData, setPlateData] = useState();
  const [imagePath, setImagePath] = useState(
    require('../../../assets/images/notFound.png'),
  );
  const [name, setName] = useState('MCDonalds');

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
          <DateContainer>
            <DateDay>05</DateDay>
            <DateMonth>Jul</DateMonth>
          </DateContainer>
        </AddressContainer>
        <RestaurantContainer>
          <RestaurantImage source={imagePath} />
          <RestaurantTextContainer>
            <Subtitle>Restaurante:</Subtitle>
            <RestaurantTitle>{name}</RestaurantTitle>
          </RestaurantTextContainer>
          <StatusContainer>
            <StatusBox>
              <Icon
                name="clock-time-eight-outline"
                size={35}
                color={colors.black}
              />
            </StatusBox>
            <StatusText>Aguardando aprovação</StatusText>
          </StatusContainer>
        </RestaurantContainer>
        <Line />
        <ItemContainer>
          <FullPriceContainer>
            <FullPriceTitle>Total pago</FullPriceTitle>
            <FullPriceText>R$ 300,00</FullPriceText>
          </FullPriceContainer>
          <FlatList
            style={{flex: 1}}
            data={restaurantsMock[0].plates}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PlateCard small={true} data={item} finished={true} number={1} />
            )}
            ListFooterComponent={<View style={{height: 200}} />}
          />
        </ItemContainer>
      </Container>
    </SafeAreaView>
  );
};

export default RequestDetail;
