import "../styles/room-availability.css"
// import { useState } from "react";
// import BookingDetails from "../components/BookingDetails";
import Nav from "../components/Nav"
import ActivityBookingDetails from "../components/ActivityBookingDetails";
import { useState } from "react";

const ActivityAvailability = ({activityDate, setActivityDate}) => {
    
    const [error, setError] = useState('');


    const handleActivityDateChange = (event) => {
        setActivityDate(event.target.value)
    }
    
    // const handleCheckOutChange = (event) => {
    // setCheckOutDate(event.target.value);
    // };

    // const handleGuestChange = (event) => {
    //     setGuests(event.target.value);
    // }

    const handleSearch = (event) => {
        event.preventDefault();

        // if (!checkInDate || !checkOutDate) {
        //     setError('Both check-in and check-out dates are required.');
        //     return;
        // }
        if (!activityDate){
            setError("Please select the activity date you wish to search.")
            return;
        }

        // Example: Log the dates to the console or send them to an API
        // console.log(`Check-In Date: ${checkInDate}`);
        // console.log(`Check-Out Date: ${checkOutDate}`);
        // Clear error and reset form or redirect as needed
        // setError('');
        // Perform any further actions such as API calls or state updates
    }
  
    return (
    <div>

        <Nav/>

        <div className="search-header">
            <h1>YOUR ADVENTURE AWAITS</h1>
            <h3>Search. Find. Explore.</h3>
        </div>

        <form className="search-info" onSubmit={handleSearch}>

            <div className="activity-date">
                <div className="checkin-checkout-boxes">
                    <label htmlFor="activity-date">ACTIVITY DATE: </label>
                    <input 
                    type="date" 
                    name="activity-date" 
                    id="activity-date" 
                    value={activityDate}
                    onChange={handleActivityDateChange}
                    />
                </div>
                
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">SEARCH</button>

        </form>

        <ActivityBookingDetails/>
        <ActivityBookingDetails/>

    </div>

  );
};

export default ActivityAvailability;
