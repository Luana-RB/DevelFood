import React, {createContext, useContext, useState} from 'react';

type ForgotPasswordContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const ForgotPasswordContext = createContext<
  ForgotPasswordContextType | undefined
>(undefined);

export const useForgotPassword = () => {
  const context = useContext(ForgotPasswordContext);
  if (!context) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
};

export const ForgotPasswordProvider = ({children}: any) => {
  const [email, setEmail] = useState('');

  return (
    <ForgotPasswordContext.Provider
      value={{
        email,
        setEmail,
      }}>
      {children}
    </ForgotPasswordContext.Provider>
  );
};
