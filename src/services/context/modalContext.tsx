import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ModalContextType = {
  isModal: boolean | undefined;
  restaurantId: string | undefined;
  restaurantName: string | undefined;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setRestaurantId: Dispatch<SetStateAction<string>>;
  setRestaurantName: Dispatch<SetStateAction<string>>;
  reset: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = ({children}: any) => {
  const [isModal, setIsModal] = useState(false);
  const [restaurantId, setRestaurantId] = useState('');
  const [restaurantName, setRestaurantName] = useState('');

  function reset() {
    setIsModal(false);
    setRestaurantId('');
    setRestaurantName('');
  }

  return (
    <ModalContext.Provider
      value={{
        isModal,
        restaurantId,
        restaurantName,
        setIsModal,
        setRestaurantId,
        setRestaurantName,
        reset,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
