import React from 'react';
import { useLocation } from "react-router-dom";
import { useState} from "react";
import config from '../config';
import { Link } from 'react-router-dom';
import "../styles/room-confirmation.css"

const RoomConfirmation = ({user}) => {

  let start = useLocation().state.end
  let end = useLocation().state.start
  let room = useLocation().state.room

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  console.log(user);
  
  const bookRoom = async () => {
    try{
      /*
      let url = `http://localhost:8080/api/rooms/book?user_id=${user_id}&room_id=${room_id}&start=${start}&end=${end}`;
      const response = await fetch(url);
      */
      
      
      const response = await fetch(config.backendBaseURL+"/api/rooms/book", {
        method: 'POST',
        body: JSON.stringify({
            username: user.username,
            room_id: room.room_id,
            start: start,
            end: end
          }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      });
      
      console.log(response);
      const result = await response.json();
      if(result != null){
        setSent(true);
      }
      else(setError("Booking did not go through; head back to booking page and try again"))
    }catch(err){
      setError("Booking did not go through; head back to booking page and try again")
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    bookRoom();
  }
  
 
  if(error == null){
    if(sent === true){
      return (
        <div className='room-booking'>
          <h1 className='room-heading'>Thank-you! Your room has been reserved.</h1>
          <div className='success-div'>
            <div className='confirmation-textbox'>
              <p>Room: {room.room_name}</p>
              <p>Check-In Date: {start}</p>
              <p>Check-Out Date: {end}</p>
              <button className="account-button"><Link to="/account">View All Bookings</Link></button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="room-booking">
          <h1 className='room-heading'>Please Confirm Your Booking</h1>
          <form onSubmit={handleSubmit} className='room-confirmation-form'>
            <div className='confirmation-textbox'>
              <p>Room: {room.room_name}</p>
              <p>Check-In: {start}</p>
              <p>Check-Out: {end}</p>
              <button type="submit" className='confirmation-button'> Submit</button>
            </div>
          </form>
        </div>
      )
    }
  } else {
    console.log(error);
    return(
      <div>
        <h1>Booking</h1>
        <p>{error}</p>
      </div>
    )
  };
  
}
  

export default RoomConfirmation;
