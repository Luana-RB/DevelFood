import React, {createContext, useContext, useEffect, useState} from 'react';
import {PlateData} from '../../types/restaurantData';

type CartContextType = {
  items: PlateData[];
  numOfItems: number;
  price: number;
  restaurantId: string;
  getQuantity: (newItem: PlateData) => number;
  addItem: (newItem: PlateData, newRestaurantId: string) => boolean;
  removeItem: (newItem: PlateData, quantity: number) => void;
  removeQuantity: (newItem: PlateData) => void;
  resetContext: () => void;
  setRestaurantId: React.Dispatch<React.SetStateAction<string>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({children}: any) => {
  const [items, setItems] = useState<PlateData[]>([]);
  const [numOfItems, setNumOfItems] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [restaurantId, setRestaurantId] = useState<string>('');

  useEffect(() => {
    setNumOfItems(items.length);
    if (numOfItems < 1) setPrice(0);
  }, []);

  const addItem = (newItem: PlateData, newRestaurantId: string) => {
    try {
      let belongs = false;

      items.forEach(item => {
        if (item.id === newItem.id) {
          belongs = true;
          item.quantity = item.quantity! + 1;
        }
      });

      if (!belongs) {
        const sameRestaurant = checkRestaurant(newRestaurantId);
        if (sameRestaurant) {
          newItem.quantity = 1;
          items.push(newItem);
          setNumOfItems(numOfItems + 1);
          setPrice(price + newItem.price);
          return true;
        } else return false;
      }
      setPrice(price + newItem.price);
      return true;
    } catch (e) {
      return false;
    }
  };

  function checkRestaurant(newRestaurantId: string) {
    if (items.length === 0) {
      setRestaurantId(newRestaurantId);
      return true;
    }
    return newRestaurantId === restaurantId;
  }

  const getQuantity = (newItem: PlateData) => {
    let quantity: number | undefined = 0;
    items.forEach(item => {
      if (item.id === newItem.id) quantity = item.quantity!;
    });
    return quantity;
  };

  const removeItem = (newItem: PlateData, quantity: number) => {
    const newArray = items.filter(item => item.id !== newItem.id);
    setItems(newArray);
    setNumOfItems(numOfItems - 1);
    setPrice(price - newItem.price * quantity);
  };

  function removeQuantity(newItem: PlateData) {
    items.forEach(item => {
      if (item.id === newItem.id) {
        item.quantity = item.quantity! - 1;
        setPrice(price - newItem.price);
      }
    });
  }

  const resetContext = () => {
    setItems([]);
    setNumOfItems(0);
    setPrice(0);
    setRestaurantId('');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        numOfItems,
        price,
        restaurantId,
        setRestaurantId,
        getQuantity,
        addItem,
        removeItem,
        resetContext,
        removeQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
