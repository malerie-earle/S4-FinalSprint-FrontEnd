import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from '../src/pages/Home';
import RoomAvailability from '../src/pages/RoomAvailability';
import { useState } from 'react';
import ActivityAvailability from './pages/ActivityAvailability';

function App() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState("");

  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="room-availability" element={<RoomAvailability checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} guests={guests} setGuests={setGuests}/>} />
         <Route path="activity-availability" element={<ActivityAvailability/>}/>
       </Routes>
     </BrowserRouter>
  );
 }
 
 export default App;
