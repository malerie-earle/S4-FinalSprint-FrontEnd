import { useState } from "react";
import "../styles/activity-room-search-bars.css"

const RoomSearchBar = ({checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, guests, setGuests, allRoomData}) => {
    

    const [error, setError] = useState('');

    const handleCheckInChange = (event) => {
        setCheckInDate(event.target.value)
    }
    
    const handleCheckOutChange = (event) => {
    setCheckOutDate(event.target.value);
    };

    const handleGuestChange = (event) => {
        setGuests(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();

        if (!checkInDate || !checkOutDate) {
            setError('Both check-in and check-out dates are required.');
            return;
        }
        if (!guests){
            setError("Please select the number of guests.")
            return;
        }

        // Example: Log the dates to the console or send them to an API
        console.log(`Check-In Date: ${checkInDate}`);
        console.log(`Check-Out Date: ${checkOutDate}`);
        // Clear error and reset form or redirect as needed
        setError('');
        // Perform any further actions such as API calls or state updates
    }
  

    return (
        <>
            <div className="search-header">
                <h1>YOUR STAY BEGINS HERE</h1>
                <h3>Check availability now</h3>
            </div>

            <form className="search-info" onSubmit={handleSearch}>

                <div className="checkin-checkout-guests">
                    <div className="checkin-checkout-boxes">
                        <label htmlFor="checkin-date">CHECK-IN DATE: </label>
                        <input 
                        type="date" 
                        name="checkin-date" 
                        id="checkin-date" 
                        value={checkInDate}
                        onChange={handleCheckInChange}
                        />
                    </div>
                    <div className="checkin-checkout-boxes">
                        <label htmlFor="checkout-date">CHECK-OUT DATE: </label>
                        <input
                            type="date" 
                            name="checkout-date" 
                            id="checkout-date" 
                            value={checkOutDate}
                            onChange={handleCheckOutChange}
                        />
                    </div>
                    <div className="guests">
                        <label htmlFor="guests">GUESTS: </label>
                        <input type="number" name="guests" id="guests" value={guests} onChange={handleGuestChange}/>
                    </div>
                    <div className="type">
                        <label htmlFor="type">TYPE: </label>
                        <select name="type" className="select-room-type">
                            <option>Select your preferred accommodation</option>
                            {allRoomData && allRoomData.map(room => (
                                <option key={room.room_id}>{room.view}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button type="submit">SEARCH</button>

            </form>
        </>
    )
};

export default RoomSearchBar;