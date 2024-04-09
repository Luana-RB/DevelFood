import React, {useEffect, useState} from 'react';
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
  MinusIcon,
  PlusIcon,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  QuantityText,
  TrashIcon,
} from '../../components/AddButton';
import {colors} from '../../globalStyles';

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
          <RestaurantIcon source={require('./assets/store.png')} />
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
                <TrashIcon source={require('./assets/trash.png')} />
              </QuantityButton>
            ) : (
              <QuantityButton onPress={() => setQuantity(quantity - 1)}>
                <MinusIcon source={require('./assets/minus.png')} />
              </QuantityButton>
            )}
            <QuantityBox style={{borderColor: colors.white}}>
              <QuantityText>{quantity}</QuantityText>
            </QuantityBox>
            <QuantityButton onPress={() => setQuantity(quantity + 1)}>
              <PlusIcon source={require('./assets/plus.png')} />
            </QuantityButton>
          </QuantityContainer>
        )}
      </FooterContainer>
    </Container>
  );
};

export default PlateDetail;
