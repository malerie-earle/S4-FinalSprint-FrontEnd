import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from '@aws-amplify/auth';
import config from '../config';
import useFetch from '../hooks/useFetch';

const ActivityBookings = ({user}) => {
  const [bookings, setBookings] = useState([]);
  const [lerror, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false); 

  const {data:activityBookings, loading, error} = useFetch(`${config.backendBaseURL}/api/activities/bookings/username?username=${user.username}`)

  const location = useLocation();
  const date = location.state?.date;
  const activity = location.state?.activity;
  
  console.log(activityBookings);
  /*
  return (
    <div>
      <h3>Activity Bookings:</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && activityBookings.length === 0 ? (
        <p style={{ color: 'red' }}>No activity bookings found.</p>
      ) : (
        <div>
          {activityBookings.map(booking => (
            <div key={booking.activity_booking_id || booking.activity_name} className="bookingItem">
              <h4 className="activityName">{booking.activityName}</h4>
              <p className="bookingDetails">
                {booking.date} @ {booking.time} <br />
                {booking.description}
              </p>
              <br />
            </div>
          ))}
        </div>
      )}
      {activityBookings.length > 0 && !error && (
        <p style={{ color: 'green' }}>Booking successful!</p>
      )}
    </div>
  );
  */
};

export default ActivityBookings;