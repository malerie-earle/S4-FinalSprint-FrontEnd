import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Availability from './pages/Availability';

function App() {
  return (
     <BrowserRouter>
         <Nav />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="availability" element={<Availability />} />
       </Routes>
       <Footer />
     </BrowserRouter>
  );
 }
 
 export default App;
