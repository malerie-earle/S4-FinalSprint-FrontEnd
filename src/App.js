import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from '../src/pages/Home';
import RoomAvailability from '../src/pages/RoomAvailability';
import { useState } from 'react';
import ActivityAvailability from './pages/ActivityAvailability';
import useFetch from './hooks/useFetch';

function App() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState("");
  const [activityDate, setActivityDate] = useState(null);
  const { data: allRoomData, loading: allRoomLoading, error: allRoomError} = useFetch('http://localhost:8080/api/rooms');

  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="room-availability" element={<RoomAvailability checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} guests={guests} setGuests={setGuests} allRoomData={allRoomData} allRoomLoading={allRoomLoading} allRoomError={allRoomError}/>} />
         <Route path="activity-availability" element={<ActivityAvailability activityDate={activityDate} setActivityDate={setActivityDate}/>}/>
       </Routes>
     </BrowserRouter>
  );
 }
 
 export default App;
