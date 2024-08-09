import React, { useState } from 'react';
import UserDetails from '../components/UserDetails';
import RoomBookings from '../components/RoomBookings';
import ActivityBookings from '../components/ActivityBookings';
import '../styles/account.css';

const Account = ({ signOut, user }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [username, setUsername] = useState(null);

  const handleFetchUserDetails = (details) => {
    setUsername(details.username);
    setUserDetails(details);
  };

  return (
    <>
      <UserDetails user={user} onFetchUserDetails={handleFetchUserDetails} />
      <div className = "mainDiv">
        {userDetails && (
          <>
            <h1>Hi, {userDetails.firstName} {userDetails.lastName}!</h1>
            <h2>Account Details:</h2>
            <p>Username: {username}</p>
            <p>Email: {userDetails.email}</p>

            <h2>Bookings:</h2>

            <div className="roomDiv">
              <h3>Rooms:</h3>
              <RoomBookings />
            </div>

            <div className="activityDiv">
              <h3>Activities:</h3>
              <ActivityBookings />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
