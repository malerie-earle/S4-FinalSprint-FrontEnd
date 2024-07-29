import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Availability from "./pages/Availability"

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/availability" element={<Availability/>}/>
      </Routes>
    </Router>
    );
  }
  
  export default App;
  
