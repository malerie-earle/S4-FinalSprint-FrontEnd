// ActivityBookingDetails.js
import React, { useEffect, useState } from 'react';

// Example API call function
const fetchActivityBookings = async () => {
  // Replace with your actual API call or data fetching logic
  // For example, using fetch or axios
  return [
    { id: 1, activityName: 'Yoga Class', date: '2024-08-01', time: '9:00 AM - 10:00 AM' },
    { id: 2, activityName: 'Cooking Workshop', date: '2024-08-02', time: '1:00 PM - 3:00 PM' }
  ];
};

const ActivityBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      const data = await fetchActivityBookings();
      setBookings(data);
    };

    loadBookings();
  }, []);

  return (
    <div>
      <h2>Activity Bookings</h2>
      {bookings.length === 0 ? (
        <p>No activity bookings found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Activity Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.activityName}</td>
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

export default ActivityBookings;
