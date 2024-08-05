import React, { createContext, useContext } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react'; // Use this hook for authentication state

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { user, signOut } = useAuthenticator(); // Access user and signOut directly

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
