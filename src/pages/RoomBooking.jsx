import React from 'react';
import Nav from '../components/Nav';
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/room-confirmation.css"
import { Link } from 'react-router-dom';

const RoomBooking = ({user}) => {
  console.log(user);
  //fetch params from last page here: TODO

  let start = useLocation().state.end
  let end = useLocation().state.start
  let room = useLocation().state.room

  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  
  const bookRoom = async () => {
    try{
      /*
      let url = `http://localhost:8080/api/rooms/book?user_id=${user_id}&room_id=${room_id}&start=${start}&end=${end}`;
      const response = await fetch(url);
      */
      
      
      const response = await fetch("http://localhost:8080/api/rooms/book", {
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

        // <div className='activity-booking'>
        //   <h1 className='activity-heading'>Please Confirm Your Booking</h1>
        //   <form onSubmit={handleSubmit} className="activity-confirmation-form">
        //     <div className='confirmation-textbox'>
        //       <p>Activity: {activity.name}</p>
        //       <p>Date: {date}</p>
        //       <p>Time: {activity.time}</p>
        //       <p>Do you wish to continue?</p>
        //       <button type="submit" className="confirmation-button">Confirm</button>
        //     </div>
        //   </form>
        // </div>

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

export default RoomBooking;
