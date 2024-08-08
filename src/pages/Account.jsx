import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch'; // Make sure to adjust the path according to your file structure
import { getCurrentUser } from 'aws-amplify/auth';

const Account = ({ signOut }) => {
  const [username, setUsername] = useState(null);
  const [fetchUrl, setFetchUrl] = useState(null);

  // Fetch the username when the component mounts
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUsername(currentUser.username);
      } catch (err) {
        console.error('Error fetching current user:', err);
      }
    };

    fetchCurrentUser();
  }, []);

  // Set the URL for the API call based on the username
  useEffect(() => {
    if (username) {
      setFetchUrl(`http://localhost:8080/api/users/${username}`);
    }
  }, [username]);

  // Use the custom hook to fetch user data
  const { data, loading, error } = useFetch(fetchUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!data) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <p>First Name: {data.given_name || 'N/A'}</p>
      <p>Last Name: {data.family_name || 'N/A'}</p>
      <p>Email: {data.email || 'N/A'}</p>
      <p>Username: {data.username || 'N/A'}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Account;
