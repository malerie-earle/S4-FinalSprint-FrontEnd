// import { useState, useEffect } from 'react';
// import { Auth } from 'aws-amplify';

// const useUserDetails = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         // Fetch the current authenticated session
//         const session = await Auth.currentSession();
//         const user = session?.getIdToken()?.payload;

//         if (user) {
//           setUserDetails({
//             FName: user.given_name || 'N/A',
//             LName: user.family_name || 'N/A',
//             Email: user.email || 'N/A',
//             Username: user.sub || 'N/A',
//           });
//         } else {
//           console.warn('No user information available in session.');
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   return { userDetails, loading };
// };

// export default useUserDetails;
