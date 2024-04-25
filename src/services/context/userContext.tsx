import React, {createContext, useContext, useState} from 'react';
import {UserData} from '../../types/userData';

type UserContextType = {
  userData: UserData | undefined;
  storeData: (data: UserData) => Promise<unknown>;
  removeData: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};

export const UserProvider = ({children}: any) => {
  const [userData, setUserData] = useState<UserData | undefined>();

  const storeData = async (data: UserData) => {
    try {
      setUserData(data);
      return data;
    } catch (e) {
      return e;
    }
  };

  const removeData = async () => {
    setUserData(undefined);
  };

  return (
    <UserContext.Provider value={{userData, storeData, removeData}}>
      {children}
    </UserContext.Provider>
  );
};
