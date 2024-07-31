import React from 'react';
import Nav from '../components/Nav';
import Slideshow from '../components/Slideshow';
import '../styles/index.css';

const Home = () => {
  return (
    <div>
      <Nav />
      <Slideshow />
      <div className="overlay">
      <p>I S L A N D&nbsp;&nbsp;&nbsp;S E R E N I T Y</p>

        </div>
      <div className="homepage-content">
        <h1>This is a homepage.</h1>
      </div>
    </div>
  );
};

export default Home;
