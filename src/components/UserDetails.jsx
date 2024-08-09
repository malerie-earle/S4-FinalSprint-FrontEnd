// src/components/UserDetails.jsx
import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '@aws-amplify/auth';

const UserDetails = ({ onFetchUserDetails }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        const username = currentUser.username;
        console.log('Current user:', username);
        if (username) {
          const response = await fetch(`http://localhost:8080/api/users/${username}`, {
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
        }
      } catch (err) {
        console.error('Error fetching current user or user details:', err);
        setError('Cannot find user details, try again later.');
      }
    };

    fetchCurrentUser();
  }, [onFetchUserDetails]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Username: {userDetails.username || 'N/A'}</p>
      <p>First Name: {userDetails.firstName || 'N/A'}</p>
      <p>Last Name: {userDetails.lastName || 'N/A'}</p>
      <p>Email: {userDetails.email || 'N/A'}</p>
    </div>
  );
};

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
