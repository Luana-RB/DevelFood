import React from 'react';

interface AuthContextValue {
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextValue | null>(null);
