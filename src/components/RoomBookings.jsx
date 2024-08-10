// RoomBookingDetails.js
import React, { useEffect, useState } from 'react';

// Example API call function
const fetchRoomBookings = async () => {
  // Replace with your actual API call or data fetching logic
  // For example, using fetch or axios
  return [
    { id: 1, room_number: 104, roomName: 'Conference Room A', date: '2024-08-01', time: '10:00 AM - 12:00 PM' },
    { id: 2, room_number: 105, roomName: 'Meeting Room 2', date: '2024-08-02', time: '2:00 PM - 4:00 PM' }
  ];
};

const RoomBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      const data = await fetchRoomBookings();
      setBookings(data);
    };

    loadBookings();
  }, []);

  return (
    <div>
      <h3>Room Bookings:</h3>
      {bookings.length === 0 ? (
        <p>No room bookings found.</p>
      ) : (

        <div>
          {bookings.map(booking => (
            <div className="bookingItem">
              <p><strong>Rm #:</strong> {booking.room_number}</p>
              <h4 className="roomName">{booking.roomName}</h4>
              <p className="bookingDetails">
                <strong>Date:</strong> {booking.date} <br />
                <strong>Time:</strong> {booking.time}
              </p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomBookings;
