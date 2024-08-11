import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './pages/Home';
import RoomAvailability from './pages/RoomAvailability';
import ActivityAvailability from './pages/ActivityAvailability';
import ActivityConfirmation from './pages/ActivityConfirmation';
import RoomConfirmation from './pages/RoomConfirmation';
import Account from './pages/Account';
import Nav from './components/Nav';
import Footer from './components/Footer'

import config from './config';


function App() {
  const { data: allActivityData, loading: allActivityLoading, error: allActivityError } = useFetchData(`${config.backendBaseURL}/api/activities`);
  const { data: allRoomData, loading: allRoomLoading, error: allRoomError } = useFetchData(`${config.backendBaseURL}/api/rooms`);

  const [activityDate, setActivityDate] = useState(getToday());
  const [activityName, setActivityName] = useState("Please select your activity");
  const [checkInDate, setCheckInDate] = useState(getToday());
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');
  const [type, setType] = useState("Select your preferred accommodation");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Any side effects related to user state can be managed here
  }, [user]);


  function useFetchData(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          console.log('Fetched data:', result); 
          setData(result);
        } catch (error) {
          console.error('Fetch error:', error);
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

  const handleAuthStateChange = (authUser) => {
    setUser(authUser);
  };

  return (
    <>
      <Nav isAuthenticated={!!user} signOut={() => setUser(null)} />
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
              type={type}
              setType={setType}
              allRoomData={allRoomData}
              allRoomLoading={allRoomLoading}
              allRoomError={allRoomError}
            />
          }
        />
        <Route
          path={`/room-availability/:checkInDate/:checkOutDate/:requestedOccupancy/:roomType`}
          element={
            <RoomAvailability
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
              guests={guests}
              setGuests={setGuests}
              type={type}
              setType={setType}
              allRoomData={allRoomData}
              allRoomLoading={allRoomLoading}
              allRoomError={allRoomError}
            />
          }
        />

        <Route
          path={`/room-availability/:checkInDate/:checkOutDate/:requestedOccupancy/:roomType`}
          element={
            <RoomAvailability
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
              guests={guests}
              setGuests={setGuests}
              type={type}
              setType={setType}
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
          path={`/activity-availability/:activityDate/:activityName`}
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
          path={`/activity-availability/:activityDate/:activityName`}
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

        {/* Protected routes */}
        <Route
          path="/room-booking"
          element={
            <Authenticator
              loginMechanisms={['username']}
              onStateChange={handleAuthStateChange}
            >
              {({ signOut, user: authUser }) => authUser ? <RoomConfirmation user={authUser} /> : <Navigate to="/" />}
            </Authenticator>
          }
        />
        <Route
          path="/activity-booking"
          element={
            <Authenticator
              loginMechanisms={['username']}
              onStateChange={handleAuthStateChange}
            >
              {({ signOut, user: authUser }) => authUser ? <ActivityConfirmation user={authUser} /> : <Navigate to="/" />}
            </Authenticator>
          }
        />
        <Route
          path="/account"
          element={
            <Authenticator
              loginMechanisms={['username']}
              onStateChange={handleAuthStateChange}
            >
              {({ signOut, user: authUser }) => authUser ? <Account signOut={signOut} user={authUser} /> : <Navigate to="/" />}
            </Authenticator>
          }
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
