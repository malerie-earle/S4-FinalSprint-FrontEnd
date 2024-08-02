// import "../styles/activity-room-booking-details.css"
import "../styles/room-details.css"
import person from "../images/person.png"
import bed from "../images/bed.png"
import { useState } from 'react';
import RoomImageSlideshow from "./RoomImageSlideshow"

const RoomDetails = ({room}) => {

  const description = room.description;
  const roomName = room.room_name;
  const image1 = room.image1;
  const image2 = room.image2;
  const image3 = room.image3;
  const imagesList = [];
  imagesList.push(image1);
  imagesList.push(image2);
  imagesList.push(image3);
  console.log(imagesList);
  const occupancy = room.occupancy;
  const beds = room.beds;

  return (
    <div className="roomBookingDetails">
        <h3 className="room-name">{roomName}</h3>
        <form className="room-form">
          <RoomImageSlideshow imagesList={imagesList}/>
          <div className="room-textbox">
              <p className="roomDescription">{description}</p>
              <div className="occupancy-beds">
                
                <p className="symbols-box"><img src={person} alt="Guests" className="symbols"/>{occupancy}</p>
                <p className="symbols-box"><img src={bed} alt="Beds" className="symbols"/>{beds}</p>
              </div>
              <button type="submit">BOOK NOW</button>
          </div>
        
        </form>
    </div>

  );
};

export default RoomDetails;