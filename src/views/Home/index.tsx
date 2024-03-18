import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../services/authContext';
import {useToken} from '../../services/tokenContext';

const Home: React.FC = () => {
  const signOut = React.useContext(AuthContext)?.signOut ?? (() => {});
  const {token} = useToken();

  return (
    <View>
      <TouchableOpacity onPress={signOut}>
        <Text>HomePage, {token}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
