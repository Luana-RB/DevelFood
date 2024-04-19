import React from 'react';
import {UsersData} from '../../types/userData';

interface AuthContextValue {
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextValue | null>(null);
