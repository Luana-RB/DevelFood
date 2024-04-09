import React, {useEffect, useState} from 'react';
import {RestaurantPlate} from '../../types/restaurantData';
import {
  BodyContainer,
  Container,
  Description,
  DescriptionContainer,
  FooterContainer,
  HeartIcon,
  PlateImage,
  Price,
  TextContainer,
  Title,
  TitleContainer,
} from './styles';
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
} from '../AddButton';

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
      if (!!data.foto) {
        setImagePath({uri: data.foto});
      } else {
        setImagePath(require('../../../assets/images/notFound.png'));
      }
      if (!!data.descricao) {
        const text = data.descricao;
        const words = text.split(' ');
        const firstWords = words.slice(0, 20);
        const newDescription = firstWords.join(' ');
        setDescription(newDescription);
      }
      if (!!data.preco) {
        const centsFormat = data.preco.toFixed(2);
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
                  <TrashIcon source={require('./assets/trash.png')} />
                </QuantityButton>
              ) : (
                <QuantityButton onPress={() => setQuantity(quantity - 1)}>
                  <MinusIcon source={require('./assets/minus.png')} />
                </QuantityButton>
              )}
              <QuantityBox>
                <QuantityText>{quantity}</QuantityText>
              </QuantityBox>
              <QuantityButton onPress={() => setQuantity(quantity + 1)}>
                <PlusIcon source={require('./assets/plus.png')} />
              </QuantityButton>
            </QuantityContainer>
          )}
        </FooterContainer>
      </BodyContainer>
    </Container>
  );
};

export default PlateCard;
