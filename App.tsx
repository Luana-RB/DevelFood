import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomePage</Text>
    </View>
  );
}

export default App;
