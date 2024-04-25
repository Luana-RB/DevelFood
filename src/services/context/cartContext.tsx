import React, {createContext, useContext, useEffect, useState} from 'react';
import {PlateData} from '../../types/restaurantData';

type CartContextType = {
  items: PlateData[];
  numOfItems: number;
  price: number;
  getQuantity: (newItem: PlateData) => number;
  addItem: (newItem: PlateData) => boolean;
  removeItem: (newItem: PlateData, quantity: number) => void;
  removeQuantity: (newItem: PlateData) => void;
  resetContext: () => void;
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

  useEffect(() => {
    setNumOfItems(items.length);
    if (numOfItems < 1) setPrice(0);
  }, []);

  const addItem = (newItem: PlateData) => {
    try {
      let belongs = false;

      items.forEach(item => {
        if (item.id === newItem.id) {
          belongs = true;
          item.quantity = item.quantity! + 1;
        }
      });

      if (!belongs) {
        const sameRestaurant = checkRestaurant(newItem.restaurantId);
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

  function checkRestaurant(restaurantId: string) {
    if (items.length === 0) return true;
    const baseId = items[0].restaurantId;
    return restaurantId === baseId;
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
  };

  return (
    <CartContext.Provider
      value={{
        items,
        numOfItems,
        price,
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
