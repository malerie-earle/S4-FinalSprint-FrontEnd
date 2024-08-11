import React, { useEffect, useState } from 'react';
import config from '../config';

const RoomBookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRoomBookings = async () => {
    if (user) {
      try {
        const response = await fetch(
          `${config.backendBaseURL}/api/rooms/bookings/username?username=${user.username}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch room bookings.");
        }

        const result = await response.json();
        setBookings(result || []);
      } catch (err) {
        setError("Error fetching room bookings.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (user) {
      fetchRoomBookings();
    } else {
      setLoading(false); // Handle case where user is not available
    }
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
    </div>
  );
};

export default RoomBookings;
