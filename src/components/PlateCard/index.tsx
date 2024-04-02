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
}

const PlateCard: React.FC<PlateCardProps> = ({data}) => {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../../assets/images/notFound.png'),
  );

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
          <Price>R$ {data.price}</Price>
          {quantity === 0 ? (
            <AddButton onPress={() => setQuantity(1)}>
              <AddText>Adicionar</AddText>
            </AddButton>
          ) : (
            <QuantityContainer>
              {quantity === 1 ? (
                <QuantityButton onPress={() => setQuantity(0)}>
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
