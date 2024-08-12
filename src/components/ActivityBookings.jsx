
import config from '../config';

import useFetch from '../hooks/useFetch';

const ActivityBookings = ({user, booking}) => {
  console.log(user);
  const {data:activityBookings, loading: activityBookingsLoading, error: activityBookingsError} = useFetch(`${config.backendBaseURL}/api/activities/bookings/username?username=${user.username}`)

  console.log(activityBookings)

  

  return (
    <div>

      <h1>Activity Bookings</h1>
      {activityBookingsLoading && <p>{activityBookingsLoading}</p>}
      {activityBookingsError && <p style={{ color: 'red' }}>{activityBookingsError}</p>}
      {!activityBookingsError && !activityBookingsLoading && activityBookings.length===0 && activityBookings != null? 
        <p>No activity bookings found.</p>
        :
        (
          <div>
            {activityBookings &&
              activityBookings.map(booking => (
                <ul>
                  <li>{booking.activity.name}</li>
                  <p>{booking.date} at {booking.activity.time}</p>
                </ul>
              ))
            }
          </div>
        )
       }
    </div>
  );

};

export default ActivityBookings;