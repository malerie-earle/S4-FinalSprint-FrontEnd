import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from '../src/pages/Home';
import Availability from '../src/pages/Availability';
import { useState } from 'react';

function App() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState("");

  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="availability" element={<Availability checkInDate={checkInDate} setCheckInDate={setCheckInDate} checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate} guests={guests} setGuests={setGuests}/>} />
       </Routes>
     </BrowserRouter>
  );
 }
 
 export default App;
