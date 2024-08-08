// src/components/UserDetails.jsx
import React from 'react';

const getUserInfo = (user) => ({
  FName: user.attributes?.given_name || 'N/A',
  LName: user.attributes?.family_name || 'N/A',
  Email: user.attributes?.email || 'N/A',
  Username: user.username || 'N/A',
});

const UserDetails = ({ user, signOut }) => {
  const userInfo = user ? getUserInfo(user) : null;

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
};

export default UserDetails;
