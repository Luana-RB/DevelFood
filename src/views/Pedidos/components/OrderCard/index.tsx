import React, {useEffect, useState} from 'react';
import {
  Container,
  Logo,
  OrderNumber,
  OrderText,
  StatusContainer,
  StatusText,
  TextContainer,
  Title,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../../globalStyles';
import {RequestData} from '../../../../types/requestData';
import {getRestaurantById} from '../../../../services/api/restaurants';
import {statusIcon, statusText} from '../../../../types/enums';
import {ActivityIndicator} from 'react-native';
import {PlateData} from '../../../../types/restaurantData';
const MAX_LENGTH_ORDER = 60;

interface OrderCardProps {
  data: RequestData;
  navigation: any;
}

const OrderCard: React.FC<OrderCardProps> = ({data, navigation}) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [plateNames, setPlateNames] = useState('');
  const [icon, setIcon] = useState('check-bold');
  const [status, setStatus] = useState('Aguardando');
  const [imagePath, setImagePath] = useState(
    require('../../../../../assets/images/notFound.png'),
  );

  useEffect(() => {
    callData();
    const formatedPlateNames = formatPlateNames();
    setPlateNames(formatedPlateNames);
    formatStatusIcon();
    formatStatusName();
  }, [data]);

  useEffect(() => {
    if (status.length > 0) setLoading(false);
  }, [status]);

  async function callData() {
    const restaurantData = await getRestaurantById(data.restaurant!.id);
    if (restaurantData) {
      setName(restaurantData.name);
      if (restaurantData.image) setImagePath({uri: restaurantData.image});
      else setImagePath(require('../../../../../assets/images/notFound.png'));
    }
  }

  function formatPlateNames() {
    let newPlateNames: string = '';

    if (data.plates && data.plates.length > 0)
      data.plates.forEach((plate: PlateData, index: number) => {
        if (!newPlateNames) newPlateNames = plate.name;
        else {
          const newName = newPlateNames + ' + ' + plate.name;
          if (newName.length < MAX_LENGTH_ORDER)
            newPlateNames = newPlateNames + ' + ' + plate.name;
          else if (index == data.plates.length - 1)
            newPlateNames = newPlateNames + '...';
        }
      });

    return newPlateNames;
  }

  function formatStatusIcon() {
    if (data.status) {
      setIcon(statusIcon[data.status]);
    } else setIcon('check-bold');
  }
  function formatStatusName() {
    if (data.status) {
      setStatus(statusText[data.status]);
    } else setStatus('Aguardando');
  }

  if (loading)
    return (
      <Container style={{alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={30} color={colors.red} />
      </Container>
    );

  return (
    <Container
      onPress={() =>
        navigation.navigate('RequestDetail', {requestId: data.id})
      }>
      <Logo source={imagePath} />
      <TextContainer>
        <Title>{name}</Title>
        <StatusContainer>
          <Icon name={icon} size={15} color={colors.red} />
          <StatusText>{status}</StatusText>
          <OrderNumber>Nº {data.id}</OrderNumber>
        </StatusContainer>
        <OrderText>{plateNames}</OrderText>
      </TextContainer>
    </Container>
  );
};

export default OrderCard;
