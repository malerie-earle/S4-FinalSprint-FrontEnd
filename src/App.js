import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from '../src/pages/Home';
import Availability from '../src/pages/Availability';

function App() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="availability" element={<Availability />} />
       </Routes>
     </BrowserRouter>
  );
 }
 
 export default App;
