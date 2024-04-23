import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {colors} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import {Container, Title} from './styles';
import DateList from './components/DateList';
import {OrderData, OrderDateData} from '../../types/orderData';
import {getOrders} from '../../services/api/orders';

const Pedidos: React.FC = () => {
  const [dataSorted, setDataSorted] = useState<OrderDateData[]>([]);

  useEffect(() => {
    async function inicializeData() {
      const orders = await getOrders();
      if (orders) sortData(orders);
    }
    inicializeData();
  }, []);

  function sortData(orders: OrderData[]) {
    orders.forEach(order => {
      const index = findDate(order);
      if (index == -1) {
        const newDate: OrderDateData = {
          id: String(dataSorted.length + 1),
          date: order.date,
          orderItems: [order],
        };
        dataSorted.push(newDate);
      } else {
        dataSorted[index].orderItems = [...dataSorted[index].orderItems, order];
      }
    });
  }

  function findDate(order: OrderData) {
    const thisDate = dataSorted.findIndex(date => date.date == order.date);
    return thisDate;
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
          renderItem={({item}) => <DateList data={item} />}
          ListFooterComponent={<View style={{height: 400}} />}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Pedidos;
