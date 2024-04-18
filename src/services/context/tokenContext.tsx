import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TokenContextType = {
  token: string | null;
  storeToken: (newToken: any) => Promise<unknown>;
  removeStoredToken: () => Promise<void>;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};

export const TokenProvider = ({children}: any) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      if (storedToken) {
        setToken(storedToken);
      }
    };
    loadToken();
  }, []);

  const storeToken = async (newToken: any) => {
    try {
      await AsyncStorage.setItem('userToken', String(newToken));
      setToken(newToken);
      return newToken;
    } catch (e) {
      return e;
    }
  };

  const removeStoredToken = async () => {
    await AsyncStorage.removeItem('userToken');
    setToken('');
  };

  return (
    <TokenContext.Provider value={{token, storeToken, removeStoredToken}}>
      {children}
    </TokenContext.Provider>
  );
};
