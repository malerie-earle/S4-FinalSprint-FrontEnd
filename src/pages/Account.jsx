import React from 'react';
import useUserDetails from '../hooks/useUserDetails';
import UserDetails from '../components/UserDetails';
import RoomBookings from '../components/RoomBookings';
import ActivityBookings from '../components/ActivityBookings';

const Account = ({ signOut }) => {
  const { userDetails, loading } = useUserDetails();

  return (
    <div>
      <h1>Account:</h1>
      <UserDetails signOut={signOut} userDetails={userDetails} />

      {loading ? (
        <p>Loading user details...</p>
      ) : (
        userDetails && (
          <>
            <h2>User Information:</h2>
            <p>First Name: {userDetails.FName}</p>
            <p>Last Name: {userDetails.LName}</p>
            <p>Email: {userDetails.Email}</p>
            <p>Username: {userDetails.Username}</p>
          </>
        )
      )}

      <h1>Bookings:</h1>
      <h2>Rooms:</h2>
      {/* <RoomBookings /> */}
      <h2>Activities:</h2>
      {/* <ActivityBookings /> */}
    </div>
  );
};

export default Account;
