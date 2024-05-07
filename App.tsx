import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {TokenProvider} from './src/services/context/tokenContext';
import {MyStack} from './src/routes/stack.routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ModalProvider} from './src/services/context/modalContext';
import ModalAvaliacao from './src/components/ModalAvaliacao';
import {CartProvider} from './src/services/context/cartContext';
import {UserProvider} from './src/services/context/userContext';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <UserProvider>
        <TokenProvider>
          <ModalProvider>
            <CartProvider>
              <MyStack />
              <ModalAvaliacao />
            </CartProvider>
          </ModalProvider>
        </TokenProvider>
      </UserProvider>
    </GestureHandlerRootView>
  );
}

export default App;
