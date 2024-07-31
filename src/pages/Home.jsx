import React from 'react';
import Nav from '../components/Nav';
import Slideshow from '../components/Slideshow';
import '../styles/index.css';

const Home = () => {
  return (
    <div>
      <Nav />
      <Slideshow />
      <div className="homepage-content">
        <h1>This is a homepage.</h1>
      </div>
    </div>
  );
};

export default Home;
