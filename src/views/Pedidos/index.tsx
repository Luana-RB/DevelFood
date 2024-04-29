import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {Container, Title} from './styles';
import DateList from './components/DateList';
import {RequestData, RequestDateData} from '../../types/requestData';
import {getRequests} from '../../services/api/requests';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';

const Pedidos: React.FC = ({navigation}: any) => {
  const [dataSorted, setDataSorted] = useState<RequestDateData[]>([]);

  useEffect(() => {
    async function inicializeData() {
      const orders = await getRequests();
      if (orders) sortOrdersByDate(orders);
    }
    inicializeData();
  }, []);

  function sortOrdersByDate(orders: RequestData[]) {
    orders.forEach(order => {
      const index = findDate(order);
      if (index == -1) {
        const newDate: RequestDateData = {
          id: String(dataSorted.length + 1),
          date: order.date,
          requestItems: [order],
        };
        dataSorted.push(newDate);
      } else
        dataSorted[index].requestItems = [
          ...dataSorted[index].requestItems,
          order,
        ];
    });
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
