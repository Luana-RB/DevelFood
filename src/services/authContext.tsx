import React from 'react';
import { UsersData } from '../types/userData';

interface AuthContextValue {
  signIn: (foundUser: UsersData) => Promise<void>;
  signOut: () => Promise<void>;
  userData: UsersData | null | undefined;
}

export const AuthContext = React.createContext<AuthContextValue | null>(null);
