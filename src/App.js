import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from './pages/Home';
import RoomAvailability from './pages/RoomAvailability';
import ActivityAvailability from './pages/ActivityAvailability';
import useFetch from './hooks/useFetch';

function App() {
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);
  const [guests, setGuests] = React.useState('');
  const [activityDate, setActivityDate] = React.useState(null);

  const { data: allRoomData, loading: allRoomLoading, error: allRoomError } = useFetch('http://localhost:8080/api/rooms');
  const { data: allActivityData, loading: allActivityLoading, error: allActivityError } = useFetch('http://localhost:8080/api/activities');

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
        path="/*" // Catch-all for other routes
        element={
          <Authenticator>
            {({ signOut, user }) => (
              user ? (
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Add other authenticated routes as needed */}
                </Routes>
              ) : (
                <Routes>
                  {/* Redirect or handle unauthenticated access */}
                  <Route path="*" element={<Home />} /> {/* Redirect to home or a 404 page */}
                </Routes>
              )
            )}
          </Authenticator>
        }
      />
    </Routes>
  );
}

export default App;
