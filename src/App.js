import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './pages/Home';
import RoomAvailability from './pages/RoomAvailability';
import ActivityAvailability from './pages/ActivityAvailability';
import Booking from './pages/Booking';
import Account from './pages/Account';
import BookingConfirmation from './pages/BookingConfirmation';
import useFetch from './hooks/useFetch';
import usePost from './hooks/usePost';
import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState('');
  const [activityDate, setActivityDate] = useState(null);
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);

  const { data: allRoomData, loading: allRoomLoading, error: allRoomError } = useFetch('http://localhost:8080/api/rooms');
  const { data: allActivityData, loading: allActivityLoading, error: allActivityError } = useFetch('http://localhost:8080/api/activities');
  const { data: activityBookingData, loading: activityBookingLoading, error: activityBookingError, postData: postActivityBookingData } = usePost('http://localhost:8080/api/activities/book');

  const handleSaveUserToDatabase = async () => {
    try {
      const { username, attributes: { email, given_name, family_name } } = user;
      const response = await fetch('http://localhost:8080/api/saveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, givenName: given_name, familyName: family_name }),
      });
      const data = await response.json();
      console.log('User data saved successfully:', data);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };
  
  return (
      <Routes>
        {/* Public routes accessible without authentication */}
        <Route path="/" element={<Home />} />
        <Route
          path="/room-availability"
          element={
            <RoomAvailability
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
              guests={guests}
              setGuests={setGuests}
              allRoomData={allRoomData}
              allRoomLoading={allRoomLoading}
              allRoomError={allRoomError}
            />
          }
        />
        <Route
          path="/activity-availability"
          element={
            <ActivityAvailability
              activityDate={activityDate}
              setActivityDate={setActivityDate}
              allActivityData={allActivityData}
              allActivityLoading={allActivityLoading}
              allActivityError={allActivityError}
            />
          }
        />

        {/* Authenticated routes handled by Authenticator */}
        <Route
          path="/*"
          element={
            <Authenticator variation="modal" signUpAttributes={[
              'email',
              'given_name',
              'family_name',
              'preferred_username'
            ]}>
              {({ signOut, user }) => user ? (
                <Routes>
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/account" element={<Account signOut={signOut} />} />
                  <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              ) : (
                <Home />
              )}
            </Authenticator>
          }
        />
      </Routes>
  );
}

export default App;
