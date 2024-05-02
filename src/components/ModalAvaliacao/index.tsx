import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../Button';
import {
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
import {sendAvaliation} from '../../services/api/avaliation';
import {useModal} from '../../services/context/modalContext';
import ModalController, {CustomModalRef} from './controller';

const ModalAvaliacao = () => {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {requestId, restaurantId, restaurantName, reset} = useModal();

  const modalRef = useRef<CustomModalRef>();

  useLayoutEffect(() => {
    ModalController.setModalRef(modalRef);
  }, []);

  useImperativeHandle(
    modalRef,
    () => ({
      show: () => {
        setModalVisible(true);
      },
      hide: () => {
        setModalVisible(false);
      },
    }),
    [],
  );

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
      if (restaurantId) {
        if (requestId) {
          const result = await sendAvaliation(score, comment, requestId);
          if (result) clearModal();
        }
      }
    }
  }

  function clearModal() {
    setComment('');
    setLoading(false);
    setScore(0);
    reset();
    ModalController.hideModal();
  }

  function handleStar(id: number) {
    setScore(id);
  }

  if (!modalVisible) return;
  return (
    <View
      style={{
        position: 'absolute',
      }}>
      <TouchableOpacity
        onPress={clearModal}
        style={{
          height: screenHeight,
          width: screenWidth,
          backgroundColor: ' rgba(43, 43, 46, 0.7)',
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={clearModal}
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
            <RestaurantName>{restaurantName}</RestaurantName>
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

export default forwardRef(ModalAvaliacao);
