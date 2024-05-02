import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type ModalContextType = {
  isModal: boolean | undefined;
  restaurantId: string | undefined;
  restaurantName: string | undefined;
  requestId: string | undefined;
  setRequestId: Dispatch<SetStateAction<string>>;
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
  const [requestId, setRequestId] = useState('');
  const [restaurantName, setRestaurantName] = useState('');

  function reset() {
    setIsModal(false);
    setRestaurantId('');
    setRestaurantName('');
    setRequestId('');
  }

  return (
    <ModalContext.Provider
      value={{
        isModal,
        restaurantId,
        requestId,
        restaurantName,
        setIsModal,
        setRequestId,
        setRestaurantId,
        setRestaurantName,
        reset,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
