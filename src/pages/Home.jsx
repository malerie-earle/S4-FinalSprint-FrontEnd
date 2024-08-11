import React from 'react';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import '../styles/index.css';

const Home = () => {
  return (
    <div>
      <Slideshow />
      <div className="overlay">
        <p>I S L A N D&nbsp;&nbsp;&nbsp;S E R E N I T Y</p>
        <div className="button-container">
        <a href="/room-availability">
        <button>B O O K&nbsp;&nbsp;&nbsp;N O W</button></a>
          <p className="additional-text">Your greatest escape awaits.</p>
        </div>
      </div>
      <div className="homepage-content"></div>
      <div className="rectangle-box">
        <div className="booking-container">
          <form className="booking-form">
            <div className="custom-date-input">
              <label htmlFor="check-in">Check-in</label>
              <input type="date" id="check-in" placeholder="Check-in date" />
            </div>
            <div className="custom-date-input">
              <label htmlFor="check-out">Check-out</label>
              <input type="date" id="check-out" placeholder="Check-out date" />
            </div>
            <div>
              <label htmlFor="guests">Guests</label>
              <select id="adults">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">6</option>

              </select>
            </div>
          
          
            <a href="/room-availability">
  <button type="button">E X P L O R E</button>
</a>
          </form>
        </div>
      </div>
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
      <div className="beach-box"></div>
      <div className="info-box">
        <div className="info-box-logo"></div>
        <div className="testimonials-title">TESTIMONIALS</div>
        <div className="testimonials1">"Island Serenity Resort was amazing. 
          Beautiful views, comfortable rooms, and great service. We'll definitely be back!"</div>
        <div className="testimonials2">"A paradise in the Maldives. The overwater bungalows were 
          stunning and the food was fantastic. Perfect for our honeymoon."</div>
        <div className="testimonials3">"A relaxing vacation spot with pristine beaches and clear waters.
          The rooms were beautiful and the staff was friendly. Highly recommend!"</div>
      </div>
      <div className="wave-box">
        <div className="wave-box-text"> B R E A T H T A K I N G&nbsp;&nbsp;&nbsp;A C C O M M O D A T I O N S.</div>
        <p>Explore peace and harmony in our stunning accommodations at Island Serenity Resort. <br></br>Nestled in the heart of the Maldives, each room offers a blend of comfort and elegance with breathtaking views. <br></br>Relax in style with modern amenities, enjoy serene surroundings, and experience the perfect tropical getaway.</p>

        <div className="room-box">
          <div className="overlay-text">
            <h2>Ocean Views.</h2>
            Relax in our luxurious suite with stunning ocean views.
          </div>
        </div>
        <div className="room-box2">
          <div className="overlay-text">
            <h2>Tropical Breeze.</h2>
            Experience paradise in our private ocean villa.
          </div>
          
        </div>
        <div className="activities-text"><p>A D V E N T U R E&nbsp;&nbsp;&nbsp;A W A I T S</p></div>
        <div className="activities-text2"><p>Explore a world of captivating activities and enriching experiences designed to delight every guest. 
          <br></br>From exhilarating water sports to tranquil beachside lounging and immersive local tours. 
          At our resort, each moment is crafted to make your stay extraordinary.</p></div>
          <div className="box-container2">
          <div className="activity-box1">   
          <iframe
    src="https://www.youtube.com/embed/hWZGhtWUl1o?si=x70x1PlHtG7iCtss&autoplay=1&mute=1&loop=1&playlist=hWZGhtWUl1o&controls=0&modestbranding=1&rel=0&showinfo=0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
  </div>
          <div className="activity-box2"><div className="overlay-text">
    <p>Discover the wonders of the ocean.</p>
    <a href="/activity-availability">
      <button>B O O K&nbsp;&nbsp;&nbsp;N O W</button>
    </a>  </div></div>
          
          </div>
          <div className="beach-box2">
            
          </div>
      <div className="info-box2">
        <div className="info-box-logo2"></div>
        <div className="amenities-title">A M E N I T I E S</div>

        <div className="amenities-text">
        Private Beach Access
        <p>Enjoy exclusive access to our pristine private beach.</p></div>

        <div className="amenities-text2">
        Personal Concierge
        <p>Benefit from our personalized concierge service,<br></br>
          available 24/7 to cater to your every need.</p></div>

        <div className="amenities-text3">
        Luxury Transfers
        <p>Experience seamless and comfortable transfers to and <br></br>from 
          the resort with our premium transportation services.</p></div>

          <div className="amenities-text4">
        Exclusive Experiences
        <p>Embark on unforgettable excursions and adventures <br></br>tailored to your 
          preferences and interests.</p>
        </div>

      </div>
       </div>
    </div>
  );
};

export default Home;
