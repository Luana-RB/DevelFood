import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {TokenProvider} from './src/services/context/tokenContext';
import {MyStack} from './src/routes/stack.routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ModalProvider} from './src/services/context/modalContext';
import ModalAvaliacao from './src/components/ModalAvaliacao';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <TokenProvider>
        <ModalProvider>
          <MyStack />
          <ModalAvaliacao />
        </ModalProvider>
      </TokenProvider>
    </GestureHandlerRootView>
  );
}

export default App;
