import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Button from '../../components/Button';
import {
  Container,
  InputBox,
  InputText,
  RestaurantName,
  Description,
  Title,
  DescriptionContainer,
  ListContainer,
  BackGround,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, screenHeight, screenWidth} from '../../globalStyles';

interface ModalProps {
  isOn: boolean;
}

const ModalAvaliacao: React.FC<ModalProps> = ({isOn}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsModalVisible(isOn);
  }, [isOn]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
      }}>
      <Container>
        <Title>Deu Bom?</Title>
        <DescriptionContainer>
          <Description>
            Obrigado por escolher nosso app, você faz toda a diferença. :D
            Agora, queremos saber o que voce acha do nosso parceiro
          </Description>
          <RestaurantName>McDonalds</RestaurantName>
        </DescriptionContainer>
        <ListContainer>
          <FlatList
            horizontal
            data={data}
            keyExtractor={item => String(item.id)}
            renderItem={item => (
              <Icon name="star" size={70} color={colors.red} />
            )}
          />
        </ListContainer>
        <InputBox>
          <InputText />
        </InputBox>
        <Button text="Enviar" handleSubmit={() => {}} />
      </Container>
    </View>
  );
};

export default ModalAvaliacao;
