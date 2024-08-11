import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from '@aws-amplify/auth';
import config from '../config';

import useFetch from '../hooks/useFetch';

const RoomBookings = ({user, booking}) => {
  console.log(user);
  const [bookings, setBookings] = useState([]);
  // const [lerror, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false); 

  const {data:roomBookings, loading:roomBookingsLoading, error: roomBookingsError} = useFetch(`${config.backendBaseURL}/api/rooms/bookings/username?username=${user.username}`)
  console.log(roomBookings)

  const location = useLocation();
  const date = location.state?.date;
  const room= location.state?.room;
  

  return (
    <div>

      <h1>Room Bookings</h1>
      {roomBookingsLoading && <p>{roomBookingsLoading}</p>}
      {roomBookingsError && <p style={{ color: 'red' }}>{roomBookingsError.message}</p>}
      {!roomBookingsError && !roomBookingsLoading && roomBookings.size==0 && roomBookings != null ? 
        <p>No room bookings found.</p>
        :
        (
          <div>
            {roomBookings &&
              roomBookings.map(booking => (
                <ul>
                  <li>{booking.room.room_name}</li>
                  <p>Check-In: {booking.start_date}</p>
                  <p>Check-Out: {booking.end_date}</p>
                </ul>
              ))
            }
          </div>
        )
      }
    </div>
  );

};

export default RoomBookings;



// import React, { useEffect, useState } from 'react';
// import config from '../config';

// const RoomBookings = ({ user }) => {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchRoomBookings = async () => {
//     if (user) {
//       try {
//         const response = await fetch(
//           `${config.backendBaseURL}/api/rooms/bookings/username?username=${user.username}`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch room bookings.");
//         }

//         const result = await response.json();
//         setBookings(result || []);
//       } catch (err) {
//         setError("Error fetching room bookings.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       fetchRoomBookings();
//     } else {
//       setLoading(false); // Handle case where user is not available
//     }
//   }, [user]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

  /*
  return (
    <div>
      <h3>Room Bookings:</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bookings.length === 0 && !error ? (
        <p>No room bookings found.</p>
      ) : (
        <div>
          {bookings.map((booking) => (
            <div key={booking.room_booking_id || booking.room_number} className="bookingItem">
              <p><strong>Rm #:</strong> {booking.room_number}</p>
              <h4 className="roomName">{booking.roomName}</h4>
              <p className="bookingDetails">
                <strong>Date:</strong> {booking.startDate} to {booking.endDate}
              </p>
              <br />
            </div>
          ))}
        </div>
      )}
      {sent && !error && <p style={{ color: 'green' }}>Booking successful!</p>}
    </div>
  );
  */
// };

// export default RoomBookings;
