import React from 'react';
import Nav from '../components/Nav';
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ActivityBooking = ({user}) => {
  //fetch params from last page here: TODO
  let date = useLocation().state.date
  let activity = useLocation().state.activity
  console.log(useLocation());
  console.log(date);
  console.log(activity);
  console.log(activity.activityId);
  console.log(user);


  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const bookActivity = async () => {
    try{
      const response = await fetch("http://localhost:8080/api/activities/book", {
        method: 'POST',
        body: JSON.stringify({
            userName: user.username,
            activityId: activity.activityId,
            date: date
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
    bookActivity();
  }
  
 
  if(error == null){
    if(sent === true){
      return (
        <div>
          <h1>SUCCESS</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Booking</h1>
          <p> Confirm booking for activity {activity.name}  for {date} </p>
          <form onSubmit={handleSubmit}>
            <div>
              <button type="submit"> Submit</button>
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
  

export default ActivityBooking;
