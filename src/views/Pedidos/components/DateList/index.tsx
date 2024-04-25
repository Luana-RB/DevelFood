import React from 'react';
import {FlatList, View} from 'react-native';
import {BodyContainer, Container, DateTitle} from './styles';
import OrderCard from '../OrderCard';
import {RequestDateData} from '../../../../types/requestData';

interface DateListProps {
  data: RequestDateData;
}

const DateList: React.FC<DateListProps> = ({data}) => {
  return (
    <Container>
      <DateTitle>{data.date}</DateTitle>
      <BodyContainer>
        <FlatList
          data={data.requestItems}
          keyExtractor={item => item.id!}
          renderItem={({item}) => <OrderCard data={item} />}
          ListFooterComponent={<View style={{height: 20}} />}
          style={{width: '100%'}}
        />
      </BodyContainer>
    </Container>
  );
};

export default DateList;
