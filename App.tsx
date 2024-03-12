import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import Login from './src/views/Login';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Login />;
}

export default App;
