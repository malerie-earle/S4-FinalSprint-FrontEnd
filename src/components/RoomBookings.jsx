// RoomBookingDetails.js
import React, { useEffect, useState } from 'react';

// Example API call function
const fetchRoomBookings = async () => {
  // Replace with your actual API call or data fetching logic
  // For example, using fetch or axios
  return [
    { id: 1, roomName: 'Conference Room A', date: '2024-08-01', time: '10:00 AM - 12:00 PM' },
    { id: 2, roomName: 'Meeting Room 2', date: '2024-08-02', time: '2:00 PM - 4:00 PM' }
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
      <h2>Room Bookings</h2>
      {bookings.length === 0 ? (
        <p>No room bookings found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Room Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.roomName}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RoomBookings;
