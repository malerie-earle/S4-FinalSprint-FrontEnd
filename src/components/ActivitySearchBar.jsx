import { useState } from "react";
import "../styles/activity-room-search-bars.css"

const ActivitySearchBar = ({activityDate, setActivityDate, allActivityData}) => {
       
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

        if (!activityDate){
            setError("Please select the activity date you wish to search.")
            return;
        }

    }

    return (
        <>
            <div className="search-header">
                <h1>YOUR ADVENTURE AWAITS</h1>
                <h3>Search. Find. Explore.</h3>
            </div>

            <form className="search-info" onSubmit={handleSearch}>

                <div className="activity-date">
                    <div className="date-name-boxes">
                        <label htmlFor="activity-date">DATE: </label>
                        <input 
                        type="date" 
                        name="activity-date" 
                        id="activity-date" 
                        value={activityDate}
                        onChange={handleActivityDateChange}
                        />
                    </div>

                    <div className="date-name-boxes">
                        <label htmlFor="activity-name">ACTIVITY NAME: </label>
                        <select name="activity-name" className="select-activity-name">
                            <option>Please select your activity</option>
                            {allActivityData && allActivityData.map(activity => (
                                <option key={activity.activity_id}>{activity.name}</option>
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

export default ActivitySearchBar;