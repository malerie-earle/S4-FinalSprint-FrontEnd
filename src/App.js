import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from '../src/pages/Home';
import RoomAvailability from '../src/pages/RoomAvailability';
import { useState } from 'react';
import ActivityAvailability from './pages/ActivityAvailability';
import useFetch from './hooks/useFetch';
import usePost from './hooks/usePost';

function App() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState("");
  const [activityDate, setActivityDate] = useState(null);
  const { data: allRoomData, loading: allRoomLoading, error: allRoomError} = useFetch('http://localhost:8080/api/rooms');
  const {data: allActivityData, loading: allActivityLoading, error: allActivityError} = useFetch('http://localhost:8080/api/activities')
  const {data: activityBookingData, loading: activityBookingLoading, error: activityBookingError, postData: postActivityBookingData} = usePost('http://localhost:8080/api/activities/book')

  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="room-availability" element={<RoomAvailability checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} guests={guests} setGuests={setGuests} allRoomData={allRoomData} allRoomLoading={allRoomLoading} allRoomError={allRoomError}/>} />
         <Route path="activity-availability" element={<ActivityAvailability activityDate={activityDate} setActivityDate={setActivityDate} allActivityData={allActivityData} allActivityLoading={allActivityLoading} allActivityError={allActivityError} />}/>
       </Routes>
     </BrowserRouter>
  );
 }
 
 export default App;
