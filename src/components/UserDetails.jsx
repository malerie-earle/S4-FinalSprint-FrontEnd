import React, { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const getUserInfo = (user) => ({
  FName: user.attributes?.given_name || 'N/A',
  LName: user.attributes?.family_name || 'N/A',
  Email: user.attributes?.email || 'N/A',
  Username: user.username || 'N/A',
});

const UserDetails = ({ signOut, onUserDetailsReady }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // No effect is needed for now, userInfo will be updated by the Authenticator callback
  }, []);

  return (
    <Authenticator>
      {({ user }) => {
        if (user) {
          const userDetails = getUserInfo(user);
          setUserInfo(userDetails); // Update local state with user details
          if (onUserDetailsReady) {
            onUserDetailsReady(userDetails); // Pass details to parent component
          }
        }

        if (!userInfo) {
          return <div>Loading...</div>;
        }

        return (
          <div>
            <p>First Name: {userInfo.FName}</p>
            <p>Last Name: {userInfo.LName}</p>
            <p>Email: {userInfo.Email}</p>
            <p>Username: {userInfo.Username}</p>
            <button onClick={signOut}>Sign Out</button>
          </div>
        );
      }}
    </Authenticator>
  );
};

export default UserDetails;
