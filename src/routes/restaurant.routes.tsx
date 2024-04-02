import {createStackNavigator} from '@react-navigation/stack';
import RestaurantProfile from '../views/RestaurantProfile';
import {RestaurantProvider} from '../services/context/restaurantContext';
import Home from '../views/Home';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import {screenHeight, screenWidth} from '../globalStyles';

const Stack = createStackNavigator();

function CustomHeartButton() {
  const [heart, setHeart] = useState(false);
  const [imagePath, setImagePath] = useState<ImageSourcePropType | undefined>(
    require('../../assets/images/heart_outline.png'),
  );

  useEffect(() => {
    handleImagePath();
  });

  function handleImagePath() {
    if (heart) {
      setImagePath(require('../../assets/images/heart.png'));
    } else setImagePath(require('../../assets/images/heart_outline.png'));
  }

  return (
    <TouchableOpacity
      onPress={() => {
        setHeart(!heart);
        handleImagePath;
      }}>
      <Image
        source={imagePath}
        style={{
          width: screenWidth * 0.056,
          height: screenHeight * 0.0238,
          marginRight: 20,
        }}
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
      </Stack.Navigator>
    </RestaurantProvider>
  );
}
