import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import UserDetails from '../components/UserDetails';
import RoomBookingDetails from '../components/RoomBookings';
import ActivityBookingDetails from '../components/ActivityBookings';

const Account = ({ signOut }) => {



  return (
    <div>
      <h1>Account:</h1>
      <UserDetails />
      <button onClick={signOut}>Sign Out</button>

      <h1>Bookings:</h1>
      <h2>Rooms:</h2>
        <RoomBookingDetails />
      <h2>Activities:</h2>
        <ActivityBookingDetails />
    </div>
  );
}

export default Account;