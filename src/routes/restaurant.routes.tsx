import {createStackNavigator} from '@react-navigation/stack';
import RestaurantProfile from '../views/RestaurantProfile';
import {RestaurantProvider} from '../services/context/restaurantContext';
import Home from '../views/Home';
import {TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlateDetail from '../views/PlateDetail';
import {RootStackParamList} from '../types/restaurantData';
import {colors} from '../globalStyles';
import {
  addFavorite,
  compareFavorites,
  removeFavorite,
} from '../services/api/favorites';

const Stack = createStackNavigator<RootStackParamList>();

function CustomHeartButton({route}: any) {
  const [heart, setHeart] = useState(true);
  const [imagePath, setImagePath] = useState<string>('heart-outline');

  useEffect(() => {
    if (route.params) {
      const {prato} = route.params;
      const isFavoriteResult = compareFavorites(prato);
      setHeart(isFavoriteResult);
    }
  }, []);

  useEffect(() => {
    handleImagePath();
  }, [heart]);

  function handleImagePath() {
    if (heart) {
      setImagePath('heart');
    } else setImagePath('heart-outline');
  }

  function handleChange() {
    setHeart(!heart);
    if (route.params) {
      const {prato} = route.params;
      if (heart) {
        removeFavorite(prato);
      } else {
        addFavorite(prato);
      }
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handleChange();
      }}>
      <Icon
        name={imagePath}
        color={colors.red}
        size={35}
        style={{marginHorizontal: 20}}
      />
    </TouchableOpacity>
  );
}

export function RestaurantStack() {
  return (
    <RestaurantProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RestaurantProfile"
          component={RestaurantProfile}
          options={({route}) => ({
            title: '',
            headerRight: () => <CustomHeartButton route={route} />,
          })}
        />
        <Stack.Screen
          name="PlateDetails"
          component={PlateDetail}
          options={({route}) => ({
            title: '',
            headerRight: () => <CustomHeartButton route={route} />,
          })}
        />
      </Stack.Navigator>
    </RestaurantProvider>
  );
}
