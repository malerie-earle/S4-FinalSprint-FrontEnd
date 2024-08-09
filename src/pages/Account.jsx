import React, { useState } from 'react';
import UserDetails from '../components/UserDetails';
import RoomBookings from '../components/RoomBookings';
import ActivityBookings from '../components/ActivityBookings';

const Account = ({ signOut }) => {
  const [userDetails, setUserDetails] = useState(null);

  const handleFetchUserDetails = (details) => {
    setUserDetails(details);
  };
<UserDetails onFetchUserDetails={handleFetchUserDetails} />
  return (
    <>
      
      <div>
        {userDetails && (
          <>
            <h1>Hi, {userDetails.firstName} {userDetails.lastName}!</h1>
            <h2>Bookings:</h2>
            <h3>Rooms:</h3>
            <RoomBookings />
            <h3>Activities:</h3>
            <ActivityBookings />

            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
