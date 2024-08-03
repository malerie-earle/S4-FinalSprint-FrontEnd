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
      <div className="homepage-content"></div>
      <div className="rectangle-box"></div> {/* New rectangle box */}
      <div className="rectangle-box2">
        <h2 className="highlighted-word">Welcome.</h2>
        <p className="rectangle-box2-text">Experience serenity in the pristine beauty of the Maldives.</p>
        <div className="box-container">
          <div className="small-box-1"></div>
          <div className="small-box-2"></div>
          <div className="small-box-3"></div>
          <p className="rectangle-box2-text2">
            Discover a haven of tranquility at our exquisite resort.<br></br> Surrounded by crystal-clear waters and lush tropical landscapes,
            our sanctuary invites you to unwind in style. Revel in lavish accommodations, savor gourmet cuisine, and immerse yourself in unparalleled luxury.
            Your perfect escape to paradise awaits, where every moment is designed to rejuvenate and inspire.
          </p>
        </div>
      </div>
      <div className="beach-box"></div> {/* New rectangle box */}
      <div className="info-box">
        <p>text goes here</p>
      </div>
      <div className="wave-box">
        <div className="wave-box-text"> B R E A T H T A K I N G&nbsp;&nbsp;&nbsp;A C C O M M O D A T I O N S.</div>
        <p>Discover our stunning accommodations at Island Serenity Resort. <br></br>Nestled in the heart of the Maldives, each room offers a blend of comfort and elegance with breathtaking views. <br></br>Relax in style with modern amenities, enjoy serene surroundings, and experience the perfect tropical getaway.</p>

        <div className="room-box">
          <div className="overlay-text">
            <h2>Ocean Views.</h2>
            <p>Relax in our luxurious suite with stunning ocean views.</p>
          </div>
        </div>
        <div className="room-box2">
          <div className="overlay-text">
            <h2>Tropical Breeze.</h2>
            <p>Experience paradise in our private ocean villa.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
