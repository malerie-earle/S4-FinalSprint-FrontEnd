import { authenticateUser } from './authService';

async function handleLogin(username, password) {
  try {
    const authResult = await authenticateUser(username, password);
    console.log('Authentication successful:', authResult);
    // Handle successful authentication (e.g., save tokens, redirect user)
  } catch (error) {
    console.error('Authentication failed:', error);
    // Handle authentication failure (e.g., show error message)
  }
}

// Example usage
handleLogin('testuser', 'testpassword');
