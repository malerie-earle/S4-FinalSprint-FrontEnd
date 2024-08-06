import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './styles/index.css';
import Home from './pages/Home';
import RoomAvailability from './pages/RoomAvailability';
import ActivityAvailability from './pages/ActivityAvailability';
import Booking from './pages/Booking';
import Account from './pages/Account';
import BookingConfirmation from './pages/BookingConfirmation';
import { useState, useEffect} from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); // Using native fetch to get data
        const result = await response.json(); // Parsing JSON from response
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

function App() {
  // Ensure useFetchData is used unconditionally
  const { data: allActivityData, loading: allActivityLoading, error: allActivityError } = useFetchData('http://localhost:8080/api/activities');
  const { data: allRoomData, loading: allRoomLoading, error: allRoomError } = useFetchData('http://localhost:8080/api/rooms');
  const [activityDate, setActivityDate] = useState(getToday());
  const [activityName, setActivityName] = useState("Please select your activity");

  // Function to get today's date in 'yyyy-MM-dd' format
  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Ensure month and day are formatted with leading zeros if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }
  
  return (
          <Routes>
            {/* Public routes accessible without authentication */}
            <Route path="/" element={<Home />} />
            <Route
              path="/room-availability"
              element={
                <RoomAvailability
                  allRoomData={allRoomData}
                />
              }
            />
    
            <Route
              path="/activity-availability"
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

            <Route
              path={`/activity-availability/:activityDate/:activityName`}
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
                <Authenticator>
                  {({ signOut, user }) => (
                    <Routes>
                      {user ? (
                        <>
                          <Route path="/" element={<Home />} />
                          <Route path="/booking" element={<Booking />} />
                          <Route path="/account" element={<Account signOut={signOut} />} />
                          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                        </>
                      ) : (
                        <Route path="*" element={<Home />} /> // Redirect to home or a 404 page
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