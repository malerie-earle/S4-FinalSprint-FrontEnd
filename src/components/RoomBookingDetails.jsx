import "../styles/activity-room-booking-details.css"
import "../styles/room-booking-details.css"
import gardenView from "../images/gardenView.jpg"
import { useState } from 'react';

const BookingDetails = ({room}) => {

  const description = room.description;
  const roomName = room.room_name;

  return (
    <div>
        <h3 className="detail-header">{roomName}</h3>
        <form className="details">
            <img src={gardenView} alt="Example Room"/>
            <div className="textbox">
                <p className="roomDescription">{description}</p>
                <button type="submit">BOOK NOW</button>
            </div>
        
        </form>
    </div>

  );
};

export default BookingDetails;