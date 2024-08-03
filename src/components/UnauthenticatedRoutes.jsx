import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function UnauthenticatedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other unauthenticated routes can go here */}
      </Routes>
    </BrowserRouter>
  );
}

export default UnauthenticatedRoutes;
