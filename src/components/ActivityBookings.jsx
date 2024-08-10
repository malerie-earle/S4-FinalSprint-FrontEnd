import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from '@aws-amplify/auth';
import config from '../config';

const ActivityBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); 
  const [isFetched, setIsFetched] = useState(false); 

  const location = useLocation();
  const date = location.state?.date;
  const activity = location.state?.activity;

  const fetchCurrentUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      const username = currentUser?.username; 
      if (username) {
        setUser({ username });
        setIsFetched(true); 
      } else {
        setError("User not found. Please log in.");
      }
    } catch (err) {
      setError("Error fetching current user.");
    }
  };

  const fetchBookedActivities = async () => {
    if (!user || !user.username) {
      setError("User not found. Please log in.");
      return [];
    }
    if (!activity || !activity.activityId) {
      setError("Activity details are missing.");
      return [];
    }
    try {
      const response = await fetch(config.backendBaseURL+"api/activities/book", {
        method: 'POST',
        body: JSON.stringify({
          userName: user.username,
          activityId: activity.activityId,
          date: date,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch bookings.");
      }

      const result = await response.json();
      if (result && result.length > 0) {
        return result; 
      } else {
        throw new Error("No activity bookings found.");
      }
    } catch (err) {
      setError(err.message);
      return [];
    }
  };

  useEffect(() => {
    const loadBookings = async () => {
      if (!isFetched) {
        await fetchCurrentUser();
      }
      if (user && date && activity) {
        const data = await fetchBookedActivities(); 
        setBookings(data);
      }
    };

    loadBookings();
  }, [user, date, activity]); 

  return (
    <div>
      <h3>Activity Bookings:</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && bookings.length === 0 ? (
        <p style={{ color: 'red' }}>No activity bookings found.</p>
      ) : (
        <div>
          {bookings.map(booking => (
            <div key={booking.id} className="bookingItem">
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
      {bookings.length > 0 && !error && (
        <p style={{ color: 'green' }}>Booking successful!</p>
      )}
    </div>
  );
};

export default ActivityBookings;
