import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RoomAvailability from '../pages/RoomAvailability';
import ActivityAvailability from '../pages/ActivityAvailability';
import useFetch from '../hooks/useFetch';
import { useAuth } from './AuthContext';

function AuthenticatedRoutes() {
  const { user, signOut } = useAuth();
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);
  const [guests, setGuests] = React.useState('');
  const [activityDate, setActivityDate] = React.useState(null);

  const { data: allRoomData, loading: allRoomLoading, error: allRoomError } = useFetch('http://localhost:8080/api/rooms');
  const { data: allActivityData, loading: allActivityLoading, error: allActivityError } = useFetch('http://localhost:8080/api/activities');

  return (
    <>
      <p>Welcome {user?.username}</p>
      <button onClick={signOut}>Sign out</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="room-availability"
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
          path="activity-availability"
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
      </Routes>
    </>
  );
}

export default AuthenticatedRoutes;
