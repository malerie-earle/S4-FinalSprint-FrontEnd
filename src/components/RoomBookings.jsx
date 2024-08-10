import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import config from '../config';

const RoomBookings = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const start = location.state?.start;
  const end = location.state?.end;
  const room = location.state?.room;

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
      }
    }
  };

  const bookRoom = async () => {
    if (user && room && start && end) {
      try {
        setError(null); // Clear any previous errors
        const response = await fetch(`${config.backendBaseURL}/api/rooms/book`, {
          method: 'POST',
          body: JSON.stringify({
            username: user.username,
            room_id: room.room_id,
            start: start,
            end: end,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to book room.");
        }

        setSent(true);
      } catch (err) {
        setError("Error booking the room.");
        console.error(err);
      }
    } else {
      setError("Booking details are incomplete.");
    }
  };

  useEffect(() => {
    fetchRoomBookings();
  }, [user]);

  return (
    <div>
      <h3>Room Bookings:</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bookings.length === 0 && !error ? (
        <p>No room bookings found.</p>
      ) : (
        <div>
          {bookings.map((booking) => (
            <div key={booking.id} className="bookingItem">
              <p><strong>Rm #:</strong> {booking.room_number}</p>
              <h4 className="roomName">{booking.roomName}</h4>
              <p className="bookingDetails">
                <strong>Date:</strong> {new Date(booking.startDate).toLocaleDateString()} to {new Date(booking.endDate).toLocaleDateString()}
              </p>
              <br />
            </div>
          ))}
        </div>
      )}
      {sent && !error && <p style={{ color: 'green' }}>Booking successful!</p>}
      {!sent && room && (
        <button onClick={bookRoom}>Confirm Booking</button>
      )}
    </div>
  );
};

export default RoomBookings;
