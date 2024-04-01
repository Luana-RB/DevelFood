import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {TokenProvider} from './src/services/context/tokenContext';
import {MyStack} from './src/routes/stack.routes';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <TokenProvider>
      <MyStack />
    </TokenProvider>
  );
}

export default App;
