// import "../styles/activity-room-booking-details.css"
import "../styles/room-details.css"
import person from "../images/person.png"
import bed from "../images/bed.png"
// import { useState } from 'react';
import RoomImageSlideshow from "./RoomImageSlideshow"

const RoomDetails = ({room}) => {
  const image1 = room.image1;
  const image2 = room.image2;
  const image3 = room.image3;
  const imagesList = [];
  imagesList.push(image1);
  imagesList.push(image2);
  imagesList.push(image3);
  console.log(imagesList);


  return (
    <div className="roomBookingDetails">
        <h3 className="room-name">{room.room_name}</h3>
        <form className="room-form">
          <RoomImageSlideshow imagesList={imagesList}/>
          <div className="room-textbox">
              <p className="roomDescription">{room.description}</p>
              <div className="occupancy-beds">
                
                <p className="symbols-box"><img src={person} alt="Guests" className="symbols"/>{room.occupancy}</p>
                <p className="symbols-box"><img src={bed} alt="Beds" className="symbols"/>{room.beds}</p>
              </div>
              <button type="submit">BOOK NOW</button>
          </div>
        
        </form>
    </div>

  );
};

export default RoomDetails;