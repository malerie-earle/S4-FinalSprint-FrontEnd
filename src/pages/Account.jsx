import React from 'react';
import UserDetails from '../components/UserDetails';
import Nav from '../components/Nav';

const Account = ({ signOut }) => {
  return (
    <>

    <div>
      <h1>Account</h1>
      
      {/* UserDetails component handles fetching and displaying user details */}
      <UserDetails signOut={signOut} />

      {/* The sign out button is provided by UserDetails, but you can add another here if needed */}
      <button onClick={signOut}>Sign Out</button>
    </div>
    </>
  );
};

export default Account;
