import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../Button';
import {
  Container,
  InputBox,
  InputText,
  RestaurantName,
  Description,
  Title,
  DescriptionContainer,
  ListContainer,
  styles,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, screenHeight, screenWidth} from '../../globalStyles';
import {RestaurantsData} from '../../types/restaurantData';
import {sendAvaliation} from '../../services/api/avaliation';

interface ModalProps {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  restaurant: RestaurantsData;
  isModalVisible: boolean;
}

const ModalAvaliacao: React.FC<ModalProps> = ({
  setIsModalVisible,
  restaurant,
  isModalVisible,
}) => {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const data = [
    {
      id: 1,
      name: score >= 1 ? 'star' : 'star-outline',
      color: score >= 1 ? colors.yellow : colors.black,
    },
    {
      id: 2,
      name: score >= 2 ? 'star' : 'star-outline',
      color: score >= 2 ? colors.yellow : colors.black,
    },
    {
      id: 3,
      name: score >= 3 ? 'star' : 'star-outline',
      color: score >= 3 ? colors.yellow : colors.black,
    },
    {
      id: 4,
      name: score >= 4 ? 'star' : 'star-outline',
      color: score >= 4 ? colors.yellow : colors.black,
    },
    {
      id: 5,
      name: score >= 5 ? 'star' : 'star-outline',
      color: score >= 5 ? colors.yellow : colors.black,
    },
  ];

  async function handleSend() {
    if (score === 0) Alert.alert('Responda o formulário');
    else {
      setLoading(true);
      const result = await sendAvaliation(score, comment, restaurant.id);
      console.log(result);
      setTimeout(() => {
        if (result) setIsModalVisible(false);
      }, 2000);
    }
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  function handleStar(id: number) {
    setScore(id);
  }

  return (
    <View
      style={{
        position: 'absolute',
      }}>
      <TouchableOpacity
        onPress={handleCancel}
        style={{
          height: screenHeight,
          width: screenWidth,
          backgroundColor: ' rgba(43, 43, 46, 0.7)',
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCancel}
        statusBarTranslucent={true}>
        <KeyboardAvoidingView
          behavior={'position'}
          enabled={true}
          contentContainerStyle={styles.container}
          style={styles.container}>
          <Title>Deu Bom?</Title>
          <DescriptionContainer>
            <Description>
              Obrigado por escolher nosso app, você faz toda a diferença. :D
              Agora, queremos saber o que voce acha do nosso parceiro{' '}
            </Description>
            <RestaurantName>{restaurant.nome}</RestaurantName>
          </DescriptionContainer>
          <ListContainer>
            <FlatList
              horizontal
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleStar(item.id)}>
                  <Icon name={item.name} size={70} color={item.color} />
                </TouchableOpacity>
              )}
            />
          </ListContainer>
          <InputBox>
            <InputText
              placeholder="Conte-nos um pouco deste restaurante..."
              placeholderTextColor={colors.black}
              value={comment}
              onChangeText={setComment}
            />
          </InputBox>
          <View>
            <Button text="Enviar" handleSubmit={handleSend} loading={loading} />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default ModalAvaliacao;
