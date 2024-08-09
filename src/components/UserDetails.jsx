import React, { useState, useEffect } from 'react';

const UserDetails = ({ user, onFetchUserDetails }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (user?.username) {
          const response = await fetch(`http://localhost:8080/api/users/${user.username}`, {
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
          onFetchUserDetails(result);  // Pass the details back to the parent
        }
      } catch (err) {
        console.error('Error fetching user details:', err);
        setError('Cannot find user details, try again later.');
      }
    };

    fetchUserDetails();
  }, [user, onFetchUserDetails]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return null;  // Render the component according to your design
};

export default UserDetails;
