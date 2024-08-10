import React, { useEffect, useState } from 'react';

// Example API call function
const fetchActivityBookings = async () => {
  // Replace with your actual API call or data fetching logic
  // For example, using fetch or axios
  return [
    { id: 1, activityName: 'Yoga Class', date: '2024-08-01', time: '9:00 AM', description: 'DESCRIPTION' },
    { id: 2, activityName: 'Cooking Workshop', date: '2024-08-02', time: '1:00 PM', description: 'DESCRIPTION' }
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
      <h3>Activity Bookings:</h3>
      {bookings.length === 0 ? (
        <p>No activity bookings found.</p>
      ) : (
        <div>
          {bookings.map(booking => (
            <div key={booking.id} className="bookingItem">
              <h4 className="activityName">{booking.activityName}</h4>
              <p className="bookingDetails">
                {booking.date} @   {booking.time} <br />
                {booking.description}
              </p> <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityBookings;
