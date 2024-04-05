import React, {createContext, useContext, useEffect, useState} from 'react';
import {RestaurantsData} from '../../types/restaurantData';

type RestaurantContextType = {
  data: RestaurantsData | undefined;
  storeData: (data: RestaurantsData) => Promise<string | null>;
  removeData: () => Promise<void>;
};

const RestaurantContext = createContext<RestaurantContextType | undefined>(
  undefined,
);

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
};

export const RestaurantProvider = ({children}: any) => {
  const [data, setData] = useState<RestaurantsData | undefined>();

  const storeData = async (newData: RestaurantsData) => {
    try {
      setData(newData);
      return `${newData}`;
    } catch (e) {
      return null;
    }
  };

  const removeData = async () => {
    setData(undefined);
  };

  return (
    <RestaurantContext.Provider value={{data, storeData, removeData}}>
      {children}
    </RestaurantContext.Provider>
  );
};
