import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Home from './pages/Home';
import RoomAvailability from './pages/RoomAvailability';
import ActivityAvailability from './pages/ActivityAvailability';
import Booking from './pages/Booking';
import Account from './pages/Account';
import BookingConfirmation from './pages/BookingConfirmation';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}

function App() {
  const { data: allActivityData, loading: allActivityLoading, error: allActivityError } = useFetchData('http://localhost:8080/api/activities');
  const { data: allRoomData, loading: allRoomLoading, error: allRoomError } = useFetchData('http://localhost:8080/api/rooms');

  const [activityDate, setActivityDate] = useState(getToday());
  const [activityName, setActivityName] = useState("Please select your activity");

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState('');
  const [user, setUser] = useState(null);

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
            activityName={activityName}
            setActivityName={setActivityName}
            allActivityData={allActivityData}
            allActivityLoading={allActivityLoading}
            allActivityError={allActivityError}
          />
        }
      />
      <Route
        path="/activity-availability/:activityDate/:activityName"
        element={
          <ActivityAvailability
            allActivityData={allActivityData}
            activityDate={activityDate}
            setActivityDate={setActivityDate}
            activityName={activityName}
            setActivityName={setActivityName}
          />
        }
      />
      {/* Authenticated routes handled by Authenticator */}
      <Route
        path="/*"
        element={
          <Authenticator signUpAttributes={['email', 'given_name', 'family_name', 'preferred_username']}>
            {({ signOut, user }) => (
              <Routes>
                {user ? (
                  <>
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/account" element={<Account signOut={signOut} />} />
                    <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                    <Route path="*" element={<Home />} />
                  </>
                ) : (
                  <Home />
                )}
              </Routes>
            )}
          </Authenticator>
        }
      />
    </Routes>
  );
}

export default App;
