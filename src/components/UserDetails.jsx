import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '@aws-amplify/auth';
import config from '../config';

const UserDetails = ({ onFetchUserDetails }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false); // Add state to track if data has been fetched

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (isFetched) return; // Prevent fetching if data is already fetched

      try {
        const currentUser = await getCurrentUser();
        const username = currentUser?.username; // Optional chaining for safety
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
  }, [onFetchUserDetails, isFetched]); // Add isFetched to dependency array to ensure it only runs once

  if (error) {
    return <p>{error}</p>;
  }

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return null; // No need to render anything directly
};

<<<<<<< HEAD
export default UserDetails;













// // src/components/UserDetails.jsx
// import React, { useState, useEffect } from 'react';
// import { getCurrentUser } from '@aws-amplify/auth';

// const UserDetails = ({ signOut }) => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         const username = currentUser.username;
//         console.log('Current user:', username);
//         if (username) {
//           const response = await fetch(`http://localhost:8080/api/users/${username}`, {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json; charset=UTF-8',
//             },
//           });

//           if (!response.ok) {
//             throw new Error('Failed to fetch user details');
//           }

//           const result = await response.json();
//           setUserDetails(result);
//           console.log('User details:', result);
//         }
//       } catch (err) {
//         console.error('Error fetching current user or user details:', err);
//         setError('Cannot find user details, try again later.');
//       }
//     };

//     fetchCurrentUser();
//   }, []);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!userDetails) {
//     return <p>Loading...</p>;
//   }

//   const { username, firstName, lastName, email } = userDetails;

//   // Return an object with the user details (if you want to use them outside of rendering)
//   return (
//     <div>
//       <p>Username: {username || 'N/A'}</p>
//       <p>First Name: {firstName || 'N/A'}</p>
//       <p>Last Name: {lastName || 'N/A'}</p>
//       <p>Email: {email || 'N/A'}</p>

//     </div>
//   );
// };

// export default UserDetails;
=======
export default UserDetails;
>>>>>>> 4824eb0218c5dad33072929a29c20621c832377e
