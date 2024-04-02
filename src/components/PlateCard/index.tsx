import React, {useEffect, useState} from 'react';
import {RestaurantPlate} from '../../types/restaurantData';
import {
  AddButton,
  AddText,
  BodyContainer,
  Container,
  Description,
  DescriptionContainer,
  FooterContainer,
  HeartIcon,
  MinusIcon,
  PlateImage,
  PlusIcon,
  Price,
  QuantityBox,
  QuantityButton,
  QuantityContainer,
  QuantityText,
  TextContainer,
  Title,
  TitleContainer,
  TrashIcon,
} from './styles';
import {ImageSourcePropType} from 'react-native';

interface PlateCardProps {
  data: RestaurantPlate;
  setCart: (value: boolean) => void;
}

const PlateCard: React.FC<PlateCardProps> = ({data, setCart}) => {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState(
    'Descrição de um prato delicioso que é uma ótima opção para pedir quando se está com a família',
  );
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );
  const [price, setPrice] = useState('0,00');

  useEffect(() => {
    if (data) {
      if (!!data.fotos) {
        setImagePath({uri: data.fotos});
      } else {
        setImagePath(require('../../../assets/images/notFound.png'));
      }
      if (!!data.description) {
        const text = data.description;
        const words = text.split(' ');
        const firstWords = words.slice(0, 20);
        const newDescription = firstWords.join(' ');
        setDescription(newDescription);
      }
      if (!!data.price) {
        const centsFormat = data.price.toFixed(2);
        const commaFormat = centsFormat.replace(/\./g, ',');
        setPrice(commaFormat);
      }
    }
  }, []);

  return (
    <Container>
      <PlateImage source={imagePath} />
      <HeartIcon source={require('../../../assets/images/heart_outline.png')} />
      <BodyContainer>
        <TextContainer>
          <TitleContainer>
            <Title>{data.nome}</Title>
          </TitleContainer>
          <DescriptionContainer>
            <Description>{description}</Description>
          </DescriptionContainer>
        </TextContainer>
        <FooterContainer>
          <Price>R$ {price}</Price>
          {quantity === 0 ? (
            <AddButton
              onPress={() => {
                setQuantity(1);
                setCart(true);
              }}>
              <AddText>Adicionar</AddText>
            </AddButton>
          ) : (
            <QuantityContainer>
              {quantity === 1 ? (
                <QuantityButton
                  onPress={() => {
                    setQuantity(0);
                    setCart(false);
                  }}>
                  <TrashIcon
                    source={require('../../../assets/images/trash.png')}
                  />
                </QuantityButton>
              ) : (
                <QuantityButton onPress={() => setQuantity(quantity - 1)}>
                  <MinusIcon
                    source={require('../../../assets/images/minus.png')}
                  />
                </QuantityButton>
              )}
              <QuantityBox>
                <QuantityText>{quantity}</QuantityText>
              </QuantityBox>
              <QuantityButton onPress={() => setQuantity(quantity + 1)}>
                <PlusIcon source={require('../../../assets/images/plus.png')} />
              </QuantityButton>
            </QuantityContainer>
          )}
        </FooterContainer>
      </BodyContainer>
    </Container>
  );
};

export default PlateCard;
