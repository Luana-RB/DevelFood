import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BodyContainer,
  Container,
  Description,
  DescriptionContainer,
  FooterContainer,
  HeaderContainer,
  PlateImage,
  Price,
  RestaurantContainer,
  RestaurantIcon,
  RestaurantName,
  SubTitle,
  Title,
} from './styles';
import {PlateDetailsScreenProps} from '../../types/restaurantData';
import {ImageSourcePropType} from 'react-native';
import {
  AddButton,
  AddText,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  QuantityText,
} from '../../components/AddButton';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';

const PlateDetail: React.FC<PlateDetailsScreenProps> = ({route}) => {
  const {prato, restaurant} = route.params;
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState(false);
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );
  const [description, setDescription] = useState(
    'Descrição de um prato delicioso que é uma ótima opção para pedir quando se está com a família',
  );
  const [price, setPrice] = useState('0,00');

  useEffect(() => {
    if (prato) {
      if (!!prato.foto) {
        setImagePath({uri: prato.foto});
      } else {
        setImagePath(require('../../../assets/images/notFound.png'));
      }
      if (!!prato.descricao) {
        const text = prato.descricao;
        const words = text.split(' ');
        const firstWords = words.slice(0, 20);
        const newDescription = firstWords.join(' ');
        setDescription(newDescription);
      }
      if (!!prato.preco) {
        const centsFormat = prato.preco.toFixed(2);
        const commaFormat = centsFormat.replace(/\./g, ',');
        setPrice(commaFormat);
      }
    }
  }, []);

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <BodyContainer>
        <PlateImage source={imagePath} />

        <HeaderContainer>
          <Title>{prato.nome}</Title>
          <SubTitle>{restaurant.categoria}</SubTitle>
        </HeaderContainer>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
        <RestaurantContainer>
          <Icon
            name="store"
            size={30}
            color={colors.red}
            style={{marginVertical: 10, marginHorizontal: 15}}
          />
          <RestaurantName>
            Vendido e entregue por {restaurant?.nome}
          </RestaurantName>
        </RestaurantContainer>
      </BodyContainer>
      <FooterContainer>
        <Price>R$ {price}</Price>
        {quantity === 0 ? (
          <AddButton
            onPress={() => {
              setQuantity(1);
              setCart(true);
            }}>
            <AddText style={{color: colors.white}}>Adicionar</AddText>
          </AddButton>
        ) : (
          <QuantityContainer>
            {quantity === 1 ? (
              <QuantityButton
                onPress={() => {
                  setQuantity(0);
                  setCart(false);
                }}>
                <Icon
                  name={'trash-can-outline'}
                  color={colors.white}
                  size={25}
                />
              </QuantityButton>
            ) : (
              <QuantityButton onPress={() => setQuantity(quantity - 1)}>
                <Icon name={'minus'} color={colors.white} size={25} />
              </QuantityButton>
            )}
            <QuantityBox style={{borderColor: colors.white}}>
              <QuantityText>{quantity}</QuantityText>
            </QuantityBox>
            <QuantityButton onPress={() => setQuantity(quantity + 1)}>
              <Icon name={'plus'} color={colors.white} size={25} />
            </QuantityButton>
          </QuantityContainer>
        )}
      </FooterContainer>
    </Container>
  );
};

export default PlateDetail;
