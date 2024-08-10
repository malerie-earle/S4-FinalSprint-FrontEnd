import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '@aws-amplify/auth';
import config from '../config';

const UserDetails = ({ onFetchUserDetails }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false); 

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (isFetched) return; 

      try {
        const currentUser = await getCurrentUser();
        const username = currentUser?.username; 
        console.log('Current user:', username);
        
        if (username) {
          const response = await fetch(`${config.backendBaseURL}/api/users/${username}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }

          const result = await response.json();
          setUserDetails(result);
          console.log('User details:', result);

          // Pass the details back to the parent
          onFetchUserDetails(result);
          setIsFetched(true); // Mark as fetched
        }
      } catch (err) {
        console.error('Error fetching current user or user details:', err);
        setError('Cannot find user details, try again later.');
      }
    };

    fetchCurrentUser();
  }, [onFetchUserDetails, isFetched]); 

  if (error) {
    return <p>{error}</p>;
  }

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return null; 
};

export default UserDetails;