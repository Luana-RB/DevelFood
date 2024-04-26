import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {colors, screenHeight} from '../../globalStyles';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import CategoryList from '../../components/CategoryList';
import PlateCard from '../../components/PlateCard';
import {Container} from './styles';
import {ListEmptyComponent} from '../../components/ListEmptyComponent';
import {useFocusEffect} from '@react-navigation/native';
import {PlateData} from '../../types/restaurantData';
import {Favorites} from '../../types/userData';
import {getPlateDataById} from '../../services/api/plates';
import {getFavoritePlates} from '../../services/api/favorites';
import {useCart} from '../../services/context/cartContext';
import CartBar from '../../components/CartBar';
import {
  SearchBarContainer,
  SearchInput,
} from '../../components/SearchBar/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DELAY = 1500;

const Favoritos: React.FC = ({navigation}: any) => {
  const [data, setData] = useState<PlateData[]>([]);
  const [shownData, setShownData] = useState<PlateData[]>([]);
  const [cart, setCart] = useState(false);
  const [filter, setFilter] = useState('');
  const {numOfItems} = useCart();

  useFocusEffect(
    React.useCallback(() => {
      getFavoritesData();
    }, []),
  );

  useEffect(() => {
    if (numOfItems > 0) setCart(true);
    else setCart(false);
  }, [numOfItems, data]);

  async function getFavoritesData() {
    const favorites: Favorites[] | undefined = await getFavoritePlates();
    const plates: PlateData[] = [];
    if (favorites) {
      for (let i = 0; i < favorites.length; i++) {
        const plateId = favorites[i].id;
        const plateData = await getPlateDataById(plateId);
        if (plateData) plates.push(plateData);
      }
      setData(plates);
      setShownData(plates);
    }
  }

  function handleSearch(text: string) {
    if (text.length < 2) {
      setShownData(data);
      return;
    }

    const newData = (data as PlateData[]).filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setShownData(newData);
  }

  const debounce = (
    func: {(filter: string): void; apply?: any},
    wait: number | undefined,
  ) => {
    let timeout: any;
    return (...args: any) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const debouncedWaitSearch = useCallback(
    debounce(filter => {
      setShownData([]);
      handleSearch(filter);
    }, DELAY),
    [data],
  );

  return (
    <Container>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <SearchBarContainer>
        <Icon
          name="magnify"
          size={30}
          color={colors.gray}
          style={{margin: 10}}
        />
        <SearchInput
          placeholder={'Buscar Restaurantes'}
          placeholderTextColor={colors.gray}
          value={filter}
          onChangeText={text => {
            setFilter(text);
            debouncedWaitSearch(text);
          }}
        />
      </SearchBarContainer>
      <View style={{height: 30}} />
      <View style={{flex: 6}}>
        <CategoryList />
        <FlatList
          style={{marginTop: 20}}
          data={shownData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PlateCard data={item} navigation={navigation} />
          )}
          ListEmptyComponent={
            <ListEmptyComponent
              text="Você não possui favoritos"
              imagePath="favorites"
            />
          }
          ListFooterComponent={<View style={{height: screenHeight * 0.18}} />}
        />
      </View>
      {cart && (
        <View
          style={{
            backgroundColor: colors.white,
            flex: 1.7,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <CartBar margin={20} navigation={navigation} />
        </View>
      )}
    </Container>
  );
};

export default Favoritos;
