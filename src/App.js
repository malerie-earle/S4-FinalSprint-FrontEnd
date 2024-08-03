import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import UnauthenticatedRoutes from './components/UnauthenticatedRoutes';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <AuthProvider>
          <main>
            {/* Render routes based on authentication */}
            {user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
          </main>
        </AuthProvider>
      )}
    </Authenticator>
  );
}

export default App;
