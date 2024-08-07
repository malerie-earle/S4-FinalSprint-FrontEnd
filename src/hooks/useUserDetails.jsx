// src/hooks/useUserDetails.js
import { useState, useEffect } from 'react';
import { fetchAuthSession } from '@aws-amplify/auth';

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const session = await fetchAuthSession();
        const user = session?.user;
        if (user) {
          setUserDetails({
            FName: user.attributes?.given_name || 'N/A',
            LName: user.attributes?.family_name || 'N/A',
            Email: user.attributes?.email || 'N/A',
            Username: user.username || 'N/A',
          });
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return { userDetails, loading };
};

export default useUserDetails;
