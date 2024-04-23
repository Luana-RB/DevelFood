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
import {OrderData} from '../../../../types/orderData';
import {getRestaurantById} from '../../../../services/api/restaurants';
const MAX_LENGTH_ORDER = 60;

interface OrderCardProps {
  data: OrderData;
}

const OrderCard: React.FC<OrderCardProps> = ({data}) => {
  const [name, setName] = useState('');
  const [plateNames, setPlateNames] = useState('');
  const [imagePath, setImagePath] = useState(
    require('../../../../../assets/images/notFound.png'),
  );

  useEffect(() => {
    async function callData() {
      const restaurantData = await getRestaurantById(
        data.plates[0].restaurantId,
      );

      if (restaurantData) {
        if (!!restaurantData.fotos) setImagePath({uri: restaurantData.fotos});
        else setImagePath(require('../../../../../assets/images/notFound.png'));
        setName(restaurantData.nome);
      }
    }
    callData();

    let newPlateNames: string = '';
    data.plates.forEach((plate, index) => {
      if (!newPlateNames) newPlateNames = plate.nome;
      else {
        const newName = newPlateNames + ' + ' + plate.nome;
        if (newName.length < MAX_LENGTH_ORDER)
          newPlateNames = newPlateNames + ' + ' + plate.nome;
        else if (index == data.plates.length - 1)
          newPlateNames = newPlateNames + '...';
      }
    });
    setPlateNames(newPlateNames);
  }, []);

  return (
    <Container>
      <Logo source={imagePath} />
      <TextContainer>
        <Title>{name}</Title>
        <StatusContainer>
          <Icon name="check-bold" size={15} color={colors.red} />
          <StatusText>{data.status}</StatusText>
          <OrderNumber>Nº {data.id}</OrderNumber>
        </StatusContainer>
        <OrderText>{plateNames}</OrderText>
      </TextContainer>
    </Container>
  );
};

export default OrderCard;
