import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {Container, Title} from './styles';
import DateList from './components/DateList';
import {RequestData, RequestDateData} from '../../types/requestData';
import {getRequests} from '../../services/api/requests';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {useFocusEffect} from '@react-navigation/native';
const DELAY = 2000;

const Pedidos: React.FC = ({navigation}: any) => {
  const [dataSorted, setDataSorted] = useState<RequestDateData[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      inicializeData();
      setInterval(() => {
        inicializeData();
      }, DELAY);
    }, []),
  );

  async function inicializeData() {
    const orders = await getRequests();
    if (orders) sortOrdersByDate(orders);
  }

  function sortOrdersByDate(orders: RequestData[]) {
    orders.forEach(order => {
      const index = findDate(order);
      if (index == -1) createNewDate(order);
      else checkIfOrderExists(order, index);
    });
  }

  function checkIfOrderExists(order: RequestData, index: number) {
    const existingOrder = dataSorted[index].requestItems.find(
      item => item.id === order.id,
    );
    if (!existingOrder) {
      // If order does not exist, add it to the requestItems array
      dataSorted[index].requestItems = [
        ...dataSorted[index].requestItems,
        order,
      ];
    } else {
      const hasChanged = Object.keys(order).some(
        key => (existingOrder as any)[key] !== (order as any)[key],
      );

      if (hasChanged) {
        const updatedRequestItems = dataSorted[index].requestItems.map(item =>
          item.id === order.id ? order : item,
        );
        dataSorted[index].requestItems = updatedRequestItems;
      }
    }

    setDataSorted([...dataSorted]);
  }

  function createNewDate(order: RequestData) {
    {
      const newDate: RequestDateData = {
        id: String(dataSorted.length + 1),
        date: order.date,
        requestItems: [order],
      };
      dataSorted.push(newDate);
    }
  }

  function findDate(order: RequestData) {
    const thisDateIndex = dataSorted.findIndex(date => date.date == order.date);
    return thisDateIndex;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.red}
      />
      <Container>
        <Title>Histórico</Title>
        <FlatList
          data={dataSorted}
          extraData={{...dataSorted}}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DateList data={item} navigation={navigation} />
          )}
          ListFooterComponent={<View style={{height: 400}} />}
          ListEmptyComponent={
            <ListEmptyComponent
              text="Você ainda não fez nenhum pedido"
              imagePath="pedidos"
            />
          }
        />
      </Container>
    </SafeAreaView>
  );
};

export default Pedidos;
