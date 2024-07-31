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
      <div className="button-container">
          <button>B O O K&nbsp;&nbsp;&nbsp;N O W</button>
          <p className="additional-text">Your greatest escape awaits.</p>
        </div>

        </div>
      <div className="homepage-content">
      </div>
    </div>
  );
};

export default Home;
