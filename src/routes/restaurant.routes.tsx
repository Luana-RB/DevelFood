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

const Stack = createStackNavigator<RootStackParamList>();

function CustomHeartButton() {
  const [heart, setHeart] = useState(false);
  const [imagePath, setImagePath] = useState<string>('heart-outline');

  useEffect(() => {
    handleImagePath();
  });

  function handleImagePath() {
    if (heart) {
      setImagePath('heart');
    } else setImagePath('heart-outline');
  }

  return (
    <TouchableOpacity
      onPress={() => {
        setHeart(!heart);
        handleImagePath;
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
          options={{
            title: '',
            headerRight: props => <CustomHeartButton />,
          }}
        />
        <Stack.Screen
          name="PlateDetails"
          component={PlateDetail}
          options={{
            title: '',
            headerRight: props => <CustomHeartButton />,
          }}
        />
      </Stack.Navigator>
    </RestaurantProvider>
  );
}
